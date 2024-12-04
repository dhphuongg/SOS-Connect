import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { RegisterCommand } from '../interface';
import { IUserRepository } from '@src/domain/repositories/user.repository.interface';
import { USER_REPOSITORY_TOKEN } from '@src/infrastructure/providers/user.repository.provider';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { CacheKeyUtil } from '@src/domain/utils/cache-key.util';
import { RequestOtpAction } from '@src/application/dto/request/otp/request-otp.dto';

@Injectable()
@CommandHandler(RegisterCommand)
export class RegisterHandler implements ICommandHandler<RegisterCommand> {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IUserRepository,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache
  ) {}

  async execute(command: RegisterCommand): Promise<any> {
    const { registerDto } = command;

    const isEmailExist = await this.userRepository.getByEmail(registerDto.email);
    if (isEmailExist) {
      throw new BadRequestException('Email đã được sử dụng');
    }

    const otpFromCache = await this.cacheManager.get<string>(
      CacheKeyUtil.genRequestOtpKey({ email: registerDto.email, action: RequestOtpAction.REGISTER })
    );
    if (!otpFromCache || otpFromCache !== registerDto.otpCode) {
      throw new BadRequestException('Mã OTP không hợp lệ');
    }

    const user = await this.userRepository.createNewUser(registerDto);

    return { message: 'Đăng ký thành công', user };
  }
}
