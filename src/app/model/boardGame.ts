export class BoardGame {
  id: string;
  category: string;
  description: string;
  maxPlayer: number;
  minPlayer: number;
  minAge: number;
  name: string;
  numberOfVotes: number;
  rating: number;
  picture: string;

  constructor(
    id: string,
    category: string,
    description: string,
    maxPlayer: number,
    minPlayer: number,
    minAge: number,
    name: string,
    numberOfVotes: number,
    rating: number,
    picture: string
  ) {
    this.id = id;
    this.category = category;
    this.description = description;
    this.maxPlayer = maxPlayer;
    this.minPlayer = minPlayer;
    this.minAge = minAge;
    this.name = name;
    this.numberOfVotes = numberOfVotes;
    this.rating = rating;
    this.picture=picture;
  }
}
