import {
  IsString,
  IsEmail,
  IsEnum,
  IsOptional,
  IsNotEmpty,
  Length,
} from 'class-validator';
import { Role } from 'generated/prisma';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  @Length(2, 16)
  name?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEnum(Role)
  role?: Role = Role.USER;

  @IsString()
  @IsNotEmpty()
  password: string;
}
