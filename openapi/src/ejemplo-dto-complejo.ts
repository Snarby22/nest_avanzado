import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";
import { EjemploDtoNodo } from './ejemplo-dto-nodo';
import { UserRole } from './enum.userrole';
import { EjemploModeloExtra } from './ejemplo-modelo-extra';

@ApiExtraModels(EjemploModeloExtra)
export class EjemploDtoComplejo {
  @ApiProperty({
    description: 'Nombre',
    required: true,
    type: String,
    default: 'Eduardo',
  })
  name: string;

  @ApiProperty({
    description: 'Edad',
    required: false,
    type: Number,
    default: 0,
  })
  age: number;

  @ApiProperty({
    description: 'numeros de telefono',
    isArray: true,
    type: [String],
    required: false,
    default: [],
  })
  tlfs: string[];

  @ApiProperty({
    type: () => EjemploDtoNodo,
    required: false,
  })
  nodo: EjemploDtoNodo;

  @ApiProperty({
    enum: ['Admin', 'Moderator', 'User'],
    required: false,
  })

  role: UserRole;

  @ApiProperty({
    type: 'array',
    description: 'matriz de numeros',
    required: false,
    items: {
      type: 'array',
      items: {
        type: 'number',
      },
    },
  })
  coords: number[][];
}
