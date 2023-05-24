import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppLoggerService } from './logger.service';
import { LoggingInterceptor } from './logging.interceptor'

@Module({
  providers: [
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    AppLoggerService,
  ],
  exports: [AppLoggerService],
})
export class CoreModule {}
