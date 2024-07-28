import {Component, NgModule} from "@angular/core";
import {RouterModule, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ApplicationPipesModule} from "./components/shared/pipe/application-pipes.module";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, NavbarComponent,ApplicationPipesModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})
export class AppComponent {
  title = "BoardGameHub-Client";
}
