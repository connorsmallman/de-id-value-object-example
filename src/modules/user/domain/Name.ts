import { DeIdentifiedValue } from './DeIdentifiedValue';
import { v4 } from 'uuid';

export class Name implements DeIdentifiedValue {
  constructor(
    public readonly value: string,
    public readonly identifier: string = v4(),
  ) {
    this.ensureIsValidName(value);
  }

  ensureIsValidName(name: string) {
    if (name.length < 2) {
      throw new Error('Invalid name');
    }
  }
}
