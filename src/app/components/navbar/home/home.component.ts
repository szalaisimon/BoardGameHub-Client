import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: "home",
  standalone: true,
  templateUrl: "./home.component.html",
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  styleUrl: "./home.component.css"
})
export class HomeComponent{

}
