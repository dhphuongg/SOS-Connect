import { ApiProperty } from '@nestjs/swagger';
import { AppConstants } from '@src/common/constants';
import { IsEmail, IsString, Length } from 'class-validator';

export class RegisterDto {
  @ApiProperty()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsString()
  readonly password: string;

  @ApiProperty()
  @IsString()
  readonly username: string;

  @IsString()
  @Length(AppConstants.Auth.OTP_LENGTH)
  readonly otpCode: string;
}
