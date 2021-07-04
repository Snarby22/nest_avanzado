import { Controller, Post, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('rutas')
@Controller('api/rutas')
export class RutasController {
  @Get()
  getSimple(): string {
    return 'get /rutas';
  }

    @Post()
    postSimple(): string {
      return 'post /rutas';
    }
}
