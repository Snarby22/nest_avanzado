import { ApiProperty, OmitType, PartialType, PickType } from '@nestjs/swagger';

export class EjemploDto {
  @ApiProperty({
    description: 'Nombre',
    required: true,
    type: String,
    default: 'Eduardo',
  })
  public name: string;
  @ApiProperty({
    description: 'Edad ',
    required: false,
    type: Number,
    default: 0,
  })
  public age: number;
  constructor(name = 'Eduardo', age = 0) {
    this.name = name;
    this.age = age;
  }
}

export class UpdateEjemploDto extends PartialType(EjemploDto) {}

export class UpdateAgeEjemploDto extends PickType(EjemploDto, [
  'age',
] as const) {}

export class UpdateNoNameCatDto extends OmitType(EjemploDto, [
  'name',
] as const) {}
