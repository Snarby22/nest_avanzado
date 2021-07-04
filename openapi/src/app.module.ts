import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParamsController } from './params.controller';
import { RutasController } from './rutas.controller';
import { PayloadController } from './payload.controller';
import { FileUploadController } from './file-upload/file-upload.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './files',
    }),
  ],
  controllers: [
    AppController,
    ParamsController,
    RutasController,
    PayloadController,
    FileUploadController,
  ],
  providers: [AppService],
})
export class AppModule {}
