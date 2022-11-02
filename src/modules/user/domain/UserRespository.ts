import { User } from './User';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UserRepository {
  save(user: User): Promise<void> {
    Logger.log(`Save user in database ${user.email.value}`);
    return Promise.resolve();
  }
}
