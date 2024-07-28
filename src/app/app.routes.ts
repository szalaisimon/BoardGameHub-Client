import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: "home",
    pathMatch: "full",
    loadComponent: () => import("./components/navbar/home/home.component").then(m => m.HomeComponent)
  },
  {
    path: "boardgames",
    pathMatch: "full",
    loadComponent: () => import("./components/navbar/boardgames/board-games.component").then(m => m.BoardGamesComponent)
  },
  {
    path: "users",
    pathMatch: "full",
    loadComponent: () => import("./components/navbar/users/users.component").then(m => m.UsersComponent)
  },
  {
    path: "boardgames/:id",
    loadComponent: () => import("./components/details/boardgame/boardgamedetail.component").then(m => m.BoardGameDetailComponent)
  }
];
