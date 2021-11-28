import { IsString, IsEmail, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  readonly username: string;
  @IsString()
  @IsOptional()
  readonly name?: string;
  @IsString()
  @IsOptional()
  readonly password: string;
  @IsEmail()
  @IsOptional()
  readonly email: string;
}
