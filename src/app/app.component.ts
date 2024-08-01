import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {NavbarComponent} from "./components/navbar/navbar.component";
import { ApplicationPipesModule } from "./components/shared/pipe/application-pipes.module";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterModule, CommonModule, NavbarComponent, ApplicationPipesModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "BoardGameHub-Client";
}
