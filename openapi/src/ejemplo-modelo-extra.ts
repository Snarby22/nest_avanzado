import { ApiProperty } from '@nestjs/swagger';

export class EjemploModeloExtra {
  @ApiProperty({
    description: 'modelo',
    required: true,
    type: String,
    default: 'Eduardo',
  })
  name: string;
}
