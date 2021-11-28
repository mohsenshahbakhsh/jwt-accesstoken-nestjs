import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly username: string;
  @IsString()
  @IsOptional()
  readonly name?: string;
  @IsString()
  readonly password: string;
  @IsEmail()
  readonly email: string;
}
