import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import * as passport from 'passport';
import flash = require('connect-flash');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'silencio',
      resave: false,
      saveUninitialized: false,
    }),
  );
 
  // Después de inicializar la app
  app.use(cookieParser());
  // En el caso de usar https
  app.use(cookieParser('silencio'));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
  await app.listen(3000);
}

bootstrap();
