import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { AppConstants } from '@src/common/constants';

export const UserAuth = createParamDecorator((_: unknown, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  return request[AppConstants.Auth.USER_AUTH_KEY];
});
