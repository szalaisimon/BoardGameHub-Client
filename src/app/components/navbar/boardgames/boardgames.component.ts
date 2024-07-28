import {Component, OnInit} from "@angular/core";
import {User} from "../../../model/user";
import {UserService} from "../../../user/user.service";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: "app-news",
  standalone: true,
  templateUrl: "./boardgames.component.html",
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  styleUrl: "./boardgames.component.css"
})
export class BoardgamesComponent implements OnInit{
  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

}
