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
  @Length(3, 64)
  name: string;

  @IsOptional()
  @IsUrl()
  @MaxLength(512)
  image?: string;
}
