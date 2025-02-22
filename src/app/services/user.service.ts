import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {

  private apiServerUrl = "http://localhost:4200";

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/api/users`);
  }
}
