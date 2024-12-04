import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum } from 'class-validator';

export enum RequestOtpAction {
  REGISTER = 'REGISTER',
}

export class RequestOtpDto {
  @IsEmail()
  @ApiProperty()
  readonly email: string;

  @IsEnum(RequestOtpAction)
  @ApiProperty({ enum: RequestOtpAction })
  readonly action: RequestOtpAction;
}
