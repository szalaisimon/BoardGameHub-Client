import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Boardgame} from "../model/boardgame";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class BoardGameService {
  private apiServerUrl = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Boardgame[]> {
    return this.http.get<Boardgame[]>(`${this.apiServerUrl}/api/boardgames`);
  }

  public findOne(boardGameId: number): Observable<Boardgame> {
    return this.http.get<Boardgame>(`${this.apiServerUrl}/api/boardgames/` + boardGameId);
  }
}
