export class User {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  role: string;
  username: string;
  favorite_board_game_id?: string;

  constructor(id: string, firstName: string, lastName: string, password: string, role: string, username: string, favorite_board_game_id?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.role = role;
    this.username = username;
    this.favorite_board_game_id = favorite_board_game_id;
  }
}
