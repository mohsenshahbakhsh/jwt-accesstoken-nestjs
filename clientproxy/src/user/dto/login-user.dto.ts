import { IsEmail, IsOptional, IsString } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @IsOptional()
  readonly username?: string;
  @IsString()
  readonly password: string;
  @IsEmail()
  readonly email?: string;
}
