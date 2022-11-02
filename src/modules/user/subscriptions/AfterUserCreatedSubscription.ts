import { OnEvent } from '@nestjs/event-emitter';
import { UserCreatedEvent } from '../domain/events/UserCreatedEvent';
import { Injectable } from '@nestjs/common';
import { IdentificationService } from '../services/IdentificationService';

@Injectable()
export class AfterUserCreatedSubscription {
  constructor(private readonly identificationService: IdentificationService) {}

  @OnEvent(UserCreatedEvent.name, { async: true })
  async handleUserCreatedEvent(event: UserCreatedEvent) {
    await this.identificationService.store(event.user.name);
    await this.identificationService.store(event.user.email);
  }
}
