import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder() //swager
    .addSecurity('basic', {
      type: 'http',
      scheme: 'basic',
    })
    .setTitle('Api de ejemplo del curso avanzado') //datos de la api
    .setDescription('Descripción del api REST')
    .setVersion('1.0')
    .addTag('mitag')
    .build(); //lanzamos la construccion


  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000); //puerto de escucha
}
bootstrap();
