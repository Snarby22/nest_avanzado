import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Session } from '@nestjs/common';
import { Response, Request } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // ejemplo de uso del objeto session
  @Get()
  findAll(@Session() session: Record<string, any>) {
    return session.visits = session.visits ? session.visits + 1 : 1;
  }

  @Get('setcookies')
  SetCookie(@Response({ passthrough: true }) response) {
    response.cookie('key1', 'value', {
      maxAge: 1000 * 60 * 10, //tiempo en minutos
      httpOnly: true,
    });
    /*
    cookie segura sólo con https
    */
    response.cookie('key2', 'value2', {
      maxAge: 1000 * 60 * 10,
      signed: true,
    });
  }

  @Get('getcookies')
  getCookies(@Request() request) {
    // para conseguir todas
    console.log(request.cookies);
    // para conseguir una en concreto
    console.log(request.cookies['clave']);
    // para conseguir las firmadas
    console.log(request.signedCookies);
    return request.cookies;
  }

  @Get('sessions')
  getVisits(@Session() session: Record<string, any>) {
    session.visits = session.visits ? session.visits + 1 : 1;
    return session.visits;
  }
}
