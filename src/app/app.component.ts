import {Component, OnInit} from "@angular/core";
import { RouterOutlet } from '@angular/router';
import {User} from "./model/user";
import {UserService} from "./user/user.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UserService]
})
export class AppComponent implements OnInit{
  title = 'BoardGameHub-Client';

  users: User[] = [];


  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
}
