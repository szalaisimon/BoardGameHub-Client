import {Component, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Router, RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {BoardGameService} from "../../../services/boardgame.service";

@Component({
  selector: "boardgames",
  standalone: true,
  templateUrl: "./boardgames.component.html",
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  styleUrl: "./boardgames.component.css"
})
export class BoardgamesComponent implements OnInit {
  boardGames: any = null;

  constructor(private boardGameService: BoardGameService, private router: Router) {
  }

  ngOnInit() {
    this.boardGameService.findAll().subscribe(data => {
      this.boardGames = data;
    });
  }

  navigateToDetails(boardGameId: number) {
    this.router.navigate(["/boardgames", boardGameId]);
  }
}
