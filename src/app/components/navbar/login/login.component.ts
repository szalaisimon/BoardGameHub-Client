import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: "login",
  standalone: true,
  templateUrl: "./login.component.html",
  imports: [RouterOutlet, CommonModule],
  styleUrl: "./login.component.css"
})
export class LoginComponent {

}
