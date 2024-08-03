import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: "login",
  standalone: true,
  templateUrl: "./login.component.html",
    imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  styleUrl: "./login.component.css"
})
export class LoginComponent {

}
