import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { RedoclyModule } from './redocly/redocly.module';

@Module({
  imports: [AuthModule, RedoclyModule],
})
export class AppModule {}
