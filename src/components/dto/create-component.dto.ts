import {
  IsString,
  IsNotEmpty,
  IsUrl,
  IsInt,
  IsPositive,
  IsDecimal,
  IsOptional,
} from 'class-validator';

export class CreateComponentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUrl()
  link: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  quantity?: number = 1;

  @IsDecimal({ decimal_digits: '2' })
  price: string;

  @IsString()
  @IsNotEmpty()
  buildId: string;

  @IsOptional()
  @IsString()
  categoryId?: string;
}
