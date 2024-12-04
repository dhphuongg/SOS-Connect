import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { BadRequestException, Inject } from '@nestjs/common';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';

import { RequestOtpCommand } from '../interface';
import { RequestOtpAction } from '@src/application/dto/request/otp/request-otp.dto';
import { IUserRepository } from '@src/domain/repositories/user.repository.interface';
import { USER_REPOSITORY_TOKEN } from '@src/infrastructure/providers/user.repository.provider';
import { AppConstants } from '@src/common/constants';
import { CacheKeyUtil } from '@src/domain/utils/cache-key.util';
import { MailService } from '@src/infrastructure/services/mail.service';

@CommandHandler(RequestOtpCommand)
export class RequestOtpHandler implements ICommandHandler<RequestOtpCommand> {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN) private readonly userRepository: IUserRepository,
    private readonly mailService: MailService,
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache
  ) {}

  async execute(command: RequestOtpCommand): Promise<any> {
    const {
      requestOtpDto: { action, email },
    } = command;

    if (action === RequestOtpAction.REGISTER) {
      const isEmailExist = !!(await this.userRepository.getByEmail(email));
      if (isEmailExist) {
        throw new BadRequestException('Email đã được sử dụng');
      }
    }

    const otpCode = this.createOtpCode(AppConstants.Auth.OTP_LENGTH);

    await this.mailService.sendOtpVerification(email, otpCode);

    await this.cacheManager.set(
      CacheKeyUtil.genRequestOtpKey({ email, action }),
      otpCode,
      1 * 60 * 1000
    );

    return { message: 'Mã OTP đã được gửi đến email của bạn' };
  }

  private createOtpCode(length: number = 6): string {
    return Math.floor(Math.random() * Math.pow(10, length))
      .toString()
      .padStart(length, '0');
  }
}
