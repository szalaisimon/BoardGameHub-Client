import {User} from "../../../model/user";
import {UserService} from "../../../services/user.service";
import {Component, OnInit} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";


@Component({
  selector: "users",
  standalone: true,
  templateUrl: "./users.component.html",
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  styleUrl: "./users.component.css"
})
export class UsersComponent implements OnInit{
  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
}
