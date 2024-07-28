import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "home",
    pathMatch: "full",
    loadComponent: () => import("./components/navbar/home/home.component").then(m => m.HomeComponent)
  },
  {
    path: "boardgames",
    pathMatch: "full",
    loadComponent: () => import("./components/navbar/boardgames/boardgames.component").then(m => m.BoardgamesComponent)
  },
  {
    path: "users",
    pathMatch: "full",
    loadComponent: () => import("./components/navbar/users/users.component").then(m => m.UsersComponent)
  }
];
