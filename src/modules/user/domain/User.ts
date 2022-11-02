import { v4 as uuidV4 } from 'uuid';

import { Name } from './Name';
import { Email } from './Email';

type UserProps = {
  name: Name;
  email: Email;
  password: string;
};

export class User {
  public id: any;
  private props: UserProps;

  constructor(props: UserProps, id?: string) {
    this.id = id || uuidV4();
    this.props = props;
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  static create(props: UserProps, id?: string) {
    return new User(props, id);
  }
}
