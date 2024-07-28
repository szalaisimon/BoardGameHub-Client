import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BoardGame} from "../model/boardGame";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class BoardGameService {
  private apiServerUrl = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<BoardGame[]> {
    return this.http.get<BoardGame[]>(`${this.apiServerUrl}/api/boardgames`);
  }

  public findOne(boardGameId: number): Observable<BoardGame> {
    return this.http.get<BoardGame>(`${this.apiServerUrl}/api/boardgames/` + boardGameId);
  }
}
