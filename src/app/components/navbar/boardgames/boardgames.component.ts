import {Component, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {Boardgame} from "../../../model/boardgame";
import {BoardGameService} from "../../../services/boardgame.service";

@Component({
  selector: "boardgames",
  standalone: true,
  templateUrl: "./boardgames.component.html",
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  styleUrl: "./boardgames.component.css"
})
export class BoardgamesComponent implements OnInit{
  boardgames: Boardgame[] = [];

  constructor(private boardGameService: BoardGameService) {
  }

  ngOnInit() {
    this.boardGameService.findAll().subscribe(data => {
      this.boardgames = data;
    });
  }
}
