export class Review {
  id: string;
  content: string;
  date: string;
  rating: number;
  boardGameId: string;
  userId: string;

  constructor(id: string, content: string, date: string, rating: number, boardGameId: string, userId: string) {
    this.id = id;
    this.content = content;
    this.date = date;
    this.rating = rating;
    this.boardGameId = boardGameId;
    this.userId = userId;
  }
}
