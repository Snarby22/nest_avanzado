import { ApiProperty } from '@nestjs/swagger';

export class EjemploDtoNodo {
  @ApiProperty({
    description: 'nodo',
    required: true,
    type: String,
    default: 'Nodo1',
  })
  name: string;
}
