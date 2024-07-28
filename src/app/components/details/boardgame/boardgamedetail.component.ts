import {Component, OnInit} from "@angular/core";
import {} from "@angular/common/http";
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {BoardGameService} from "../../../services/boardgame.service";
import {BoardGame} from "../../../model/boardGame";
import {ApplicationPipesModule} from "../../shared/pipe/application-pipes.module";

@Component({
  selector: "boardgamedetail",
  standalone: true,
  templateUrl: "./boardgamedetail.component.html",
  styleUrl: "./boardgamedetail.component.css",
  imports: [RouterOutlet, CommonModule, ApplicationPipesModule]
})
export class BoardGameDetailComponent implements OnInit {
  boardGameId!: number;
  boardGame: BoardGame | undefined;

  constructor(
    private route: ActivatedRoute,
    private boardGameService: BoardGameService
  ) {
  }

  ngOnInit() {
    this.boardGameId = Number(this.route.snapshot.paramMap.get("id"));
    this.boardGameService.findOne(this.boardGameId).subscribe(data => {
      this.boardGame = data;
    });
  }
}
