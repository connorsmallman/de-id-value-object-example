import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from '../../dtos/UserDTO';
import { CreateUserUseCase } from '../../usecases/CreateUserUseCase';

type UserResponseDTO = {};

@Controller()
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async createUser(@Body() userDTO: UserDTO): Promise<UserResponseDTO> {
    const user = await this.createUserUseCase.execute(userDTO);

    return {};
  }
}
