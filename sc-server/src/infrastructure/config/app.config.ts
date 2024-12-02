import { registerAs } from '@nestjs/config';

export type AppConfig = {
  nodeEnv: string;
  name: string;
  port: number;
  apiPrefix: string;
};

export default registerAs<AppConfig>('app-config', () => ({
  nodeEnv: process.env.NODE_ENV || 'development',
  name: process.env.APP_NAME || 'SC Server',
  port: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 3000,
  apiPrefix: '/api/v1',
}));
