import { AuthHandlers } from './auth/handler';
import { OtpHandlers } from './otp/handlers';

export const CommandHandlers = [...AuthHandlers, ...OtpHandlers];
