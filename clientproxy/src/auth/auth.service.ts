import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';
import * as bcrypt from 'bcrypt';

import { ResponseInterface } from '../config/constants.global';
import { UserInterface } from '../user/interfaces/user.interface';
import { TokenBearerInterface } from './interfaces/bearer.token.interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject('Auth') private readonly client: ClientProxy,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(username: string, pass: string): Promise<UserInterface> {
    try {
      const res: ResponseInterface = await this.client
        .send<ResponseInterface>({ user: 'findByUsername' }, username)
        .toPromise();
      if (res && res.body) {
        const user = res.body;

        const isMatch = await bcrypt.compare(pass, user.password);

        if (isMatch) {
          const { password, ...userInfo } = res.body;
          return userInfo;
        }
      }
      return null;
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async login(user: UserInterface) {
    try {
      const response: ResponseInterface = await this.client
        .send<ResponseInterface>({ user: 'findByUsername' }, user.username)
        .toPromise();
      if (response && response.body) {
        const userRecord = response.body;
        const payload = {
          username: user.username,
          sub: userRecord._id,
        };
        const access_token: TokenBearerInterface = {
          access_token: this.jwtService.sign(payload),
        };
        return access_token;
      }
      return null;
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
