import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import * as path from 'path';
import * as ejs from 'ejs';

@Injectable()
export class MailService implements OnModuleInit {
  private transporter;
  private readonly logger = new Logger(MailService.name);

  constructor(private readonly configService: ConfigService) {}

  onModuleInit() {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      auth: {
        user: this.configService.get<string>('MAIL_USER'),
        pass: this.configService.get<string>('MAIL_PASSWORD'),
      },
    });

    this.transporter.verify((error: unknown) => {
      if (error) {
        this.logger.error(error);
        console.error(error);
      } else {
        this.logger.log('Server is ready to send mail');
      }
    });
  }

  async sendOtpVerification(to: string, otpCode: string) {
    try {
      const html = await ejs.renderFile(
        path.join(process.cwd(), 'src/infrastructure/templates/otp.template.ejs'),
        { otpCode }
      );
      await this.transporter.sendMail({
        from: { name: 'SOS Connect' },
        to,
        subject: '[SOS Connect] – Email xác nhận',
        html,
      });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}
