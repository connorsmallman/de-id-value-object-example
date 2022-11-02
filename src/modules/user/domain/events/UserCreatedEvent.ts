import { User } from '../User';

export class UserCreatedEvent {
  constructor(public user: User) {}
}


