import { Document } from 'mongoose';

export interface UserInterface extends Document {
  _id?: string;
  readonly username: string;
  readonly password?: string;
  readonly email?: string;
  readonly name?: string;
  confirmed?: boolean;
}
