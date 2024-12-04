export class CacheKeyUtil {
  static genRequestOtpKey({ email, action }: { email: string; action: string }): string {
    return `OTP_${action}_${email}`;
  }
}
