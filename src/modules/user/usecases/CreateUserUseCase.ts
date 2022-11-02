import { User } from '../domain/User';
import { Email } from '../domain/Email';
import { Name } from '../domain/Name';
import { UserDTO } from '../dtos/UserDTO';
import { UserRepository } from '../domain/UserRespository';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UserCreatedEvent } from '../domain/events/UserCreatedEvent';

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private eventEmitter: EventEmitter2,
  ) {}
  async execute(dto: UserDTO): Promise<User> {
    const email = new Email(dto.email);
    const name = new Name(dto.name);
    const user = User.create({
      email,
      name,
      password: dto.password,
    });

    await this.userRepository.save(user);

    this.eventEmitter.emit(UserCreatedEvent.name, new UserCreatedEvent(user));

    return user;
  }
}
