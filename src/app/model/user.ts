export class User {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  role: string;
  username: string;
  token!: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    password: string,
    role: string,
    username: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.role = role;
    this.username = username;
  }
}
