import { User } from './User';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UserRepository {
  save(user: User): Promise<void> {
    Logger.log(
      `Save user in database using the identifier ${user.name.identifier}`,
    );
    return Promise.resolve();
  }
}
