import * as fs from "fs";
import * as path from "path";
import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
// import { ClientProxy } from '@nestjs/microservices';
import * as bcrypt from "bcrypt";

import { UserInterface } from "./interfaces/user.interface";
import { TokenBearerInterface } from "./interfaces/token.interface";
import jwtConstants from "./constants";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  find_user(username: string): UserInterface {
    try {
      const raw_data = fs.readFileSync(
        path.join(__dirname, "../../data/users.json")
      );
      const users = JSON.parse(raw_data.toString());
      let user_record = {};
      users.forEach((item: UserInterface) => {
        if (item.username === username) user_record = item;
      });
      return user_record;
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
  async validateUser(username: string, pass: string): Promise<UserInterface> {
    try {
      const user_record = this.find_user(username);
      if (user_record.password === pass) {
        const { password, ...user_info } = user_record;
        return user_info;
      }

      return null;
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async login(user: UserInterface) {
    try {
      const user_record = this.find_user(user.username);
      if (user_record) {
        const payload = {
          username: user_record.username,
          sub: user_record.id,
        };
        const access_token = this.jwtService.sign(payload, {keyid:"access"});
        const refresh_token = this.jwtService.sign(payload, {keyid:"refresh"});
        return { access_token, refresh_token };
      }
      return null;
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
