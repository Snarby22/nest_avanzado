import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('params')
@Controller('params')
export class ParamsController {

  @Get('/:id')
  @ApiParam({
    description: 'id',
    name: 'id',
    required: true,
    type: Number,
  })
    findById(@Param() params) {
      return 'post /rutas/:id ' + params.id;
    }

  @Get('sub/un/:otro')
  @ApiParam({
    description: 'id2',
    name: 'otro',
    required: false,
  })
  findByIdAndOtro(@Param('otro') otro: string) {
    return 'post /sub/un/ ' + otro;
  }


    @Post('sub/:id/:otro')
    modifyById(@Param('id') id: number, @Param('otro') otro: string) {
      return 'post /params/sub/:id/:otro ' + id + ':' + otro;
    }
}
