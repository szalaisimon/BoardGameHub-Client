import {Component, OnInit} from "@angular/core";
import {} from "@angular/common/http";
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {BoardGameService} from "../../../services/boardgame.service";
import {BoardGame} from "../../../model/boardGame";
import {ApplicationPipesModule} from "../../shared/pipe/application-pipes.module";
import {Review} from "../../../model/review";

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
  reviews: Review[] = [];
  reviewStarNumber : number = 10;
  stars: any[] = [];
  hoveredIndex = 0;

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
    this.boardGameService.getReviews(this.boardGameId).subscribe(data => {
      this.reviews = data;
    });
    this.stars = Array(this.reviewStarNumber).fill(0);
  }

  onMouseOver(index: number): void {
    this.hoveredIndex = index + 1;

    //console.log('Hover index:', this.hoveredIndex);
  }

  onMouseLeave(): void {
    this.hoveredIndex = 0;
  }
}
