import { v4 } from 'uuid';
import { DeIdentifiedValue } from './DeIdentifiedValue';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export class Email implements DeIdentifiedValue {
  constructor(
    public readonly value: string,
    public readonly identifier: string = v4(),
  ) {
    this.ensureIsValidEmail(value);
  }

  ensureIsValidEmail(email: string) {
    if (!validateEmail(email)) {
      throw new Error('Invalid email');
    }
  }
}
