export class UpdateUserDto {
  readonly username: string;
  password?: string;
  email?: string;
  name?: string;
  confirmed?: boolean;
}
