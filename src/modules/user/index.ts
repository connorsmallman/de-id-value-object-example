import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UserController } from './infrastructure/http/UserController';
import { CreateUserUseCase } from './usecases/CreateUserUseCase';
import { IdentificationService } from './services/IdentificationService';

@Module({
  imports: [EventEmitterModule.forRoot()],
  controllers: [UserController],
  providers: [CreateUserUseCase, IdentificationService],
})
export class UserModule {}
