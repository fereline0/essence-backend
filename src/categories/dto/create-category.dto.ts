import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  MaxLength,
  Length,
} from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 32)
  name: string;

  @IsOptional()
  @IsUrl()
  @MaxLength(500)
  image?: string;
}
