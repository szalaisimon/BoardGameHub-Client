import {Component} from "@angular/core";
import {RouterLink, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {UserService} from "../../services/user.service";
import {BoardGameService} from "../../services/boardgame.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, CommonModule, RouterOutlet],
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
  providers: [UserService, BoardGameService]
})

export class NavbarComponent {
  navItems: NavItem[] = [
    new NavItem("Home", false, "home"),
    new NavItem("BoardGames", false, "boardgames"),
    new NavItem("Users", false, "users"),
    new NavItem("Register", false, "registration"),
    new NavItem("Login", false, "login")
  ];

  activateNavElement(selectedNavItem: NavItem): void {
    this.navItems.forEach(x => {
        x.active = x == selectedNavItem;
      }
    );
  }
}

export class NavItem {
  title: string;
  active: boolean;
  route: string;

  constructor(title: string, active: boolean, route: string) {
    this.title = title;
    this.active = active;
    this.route = route;
  }
}
