import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(@Inject('UserService') private readonly userService) {}
}
