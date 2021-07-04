import { Body, Controller, Get, Param, Post, Query, Request } from "@nestjs/common";
import { CreateObjectDto } from '../dto/create-object.dto';

@Controller('user')
export class UserController {
  @Get()
  getSimple(): string {
    return 'get /user';
  }

  @Post()
  postSimple(): string {
    return 'post /user';
  }


  @Get(':id')
  findById(@Param() params) {
    return 'get /user/:id ' + params.id;
  }

  @Post('data')
  postData(
    @Query('username') username: string,
    @Query('password') password: string,
  ): string {
    return 'post /user ' + username + ' ' + password;
  }
  @Post('dto')
  async create(@Body() createDto: CreateObjectDto) { 
    return `This action adds a new object with name: ${createDto.name}`;
  }
}
