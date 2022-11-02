import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from '../../dtos/UserDTO';
import { CreateUserUseCase } from '../../usecases/CreateUserUseCase';

type UserResponseDTO = {
  id: string;
  name: string;
  email: string;
  password: string;
};

@Controller()
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async createUser(@Body() userDTO: UserDTO): Promise<UserResponseDTO> {
    const user = await this.createUserUseCase.execute(userDTO);

    return {
      id: user.id,
      email: user.email.value,
      name: user.name.value,
      password: user.password,
    };
  }
}
