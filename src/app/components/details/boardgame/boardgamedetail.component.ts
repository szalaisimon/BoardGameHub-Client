import {Component, OnInit} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {BoardGameService} from "../../../services/boardgame.service";
import {Boardgame} from "../../../model/boardgame";

@Component({
  selector: "boardgamedetail",
  standalone: true,
  templateUrl: "./boardgamedetail.component.html",
  styleUrl: "./boardgamedetail.component.css",
  imports: [HttpClientModule, RouterOutlet, CommonModule]
})
export class BoardGameDetailComponent implements OnInit {
  boardGameId!: number;
  boardgame: Boardgame | undefined;

  constructor(
    private route: ActivatedRoute,
    private boardGameService: BoardGameService
  ) {
  }

  ngOnInit() {
    this.boardGameId = Number(this.route.snapshot.paramMap.get("id"));
    this.boardGameService.findOne(this.boardGameId).subscribe(data => {
      this.boardgame = data;
    });
  }
}
