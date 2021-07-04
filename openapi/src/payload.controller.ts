import { Controller, Post, Body, Get, Query, Put } from '@nestjs/common';
import { EjemploDto, UpdateEjemploDto } from './ejemplo-dto';
import { EjemploDtoComplejo } from './ejemplo-dto-complejo';
import {
  ApiBody,
  ApiHeader,
  ApiQuery,
  ApiResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { UserRole } from './enum.userrole';

@ApiSecurity('basic')
@ApiTags('payload')
@Controller('payload')
export class PayloadController {
  @Post()
  @ApiHeader({
    name: 'Content-Type',
    description: 'application-json',
  })
  async create(@Body() createDto: EjemploDto) {
    return `This action adds a new object with name: ${createDto.name}`;
  }
  @Put()
  @ApiHeader({
    name: 'Content-Type',
    description: 'application-json',
  })
  async update(@Body() updateDto: UpdateEjemploDto) {
    return `This action adds a new object with name: ${updateDto.name}`;
  }
  @Post('complejo')
  @ApiHeader({
    name: 'Content-Type',
    description: 'application-json',
  })
  @ApiBody({ type: EjemploDtoComplejo })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: EjemploDtoComplejo,
  })
  async createComplejo(@Body() createDto: EjemploDtoComplejo) {
    return `This action adds a new object with name: ${createDto.name}`;
  }
  @Post('complejos')
  @ApiHeader({
    name: 'Content-Type',
    description: 'application-json',
  })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: [EjemploDtoComplejo],
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  async postComplejos(@Body() createDtos: EjemploDtoComplejo[]) {
    return `This action adds a new object with name: ${createDtos[0].name}`;
  }
  @Get('miquery')
  @ApiQuery({ name: 'role', enum: UserRole })
  async filterByRole(@Query('role') role: UserRole = UserRole.User) {
    return role;
  }
}
