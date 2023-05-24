import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './config/config';
import { ProductsModule } from './products/products.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/env/.env.${process.env.NODE_ENV}`,
      load: [appConfig],
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    CoreModule,
    ProductsModule,
  ],
})
export class AppModule {}
