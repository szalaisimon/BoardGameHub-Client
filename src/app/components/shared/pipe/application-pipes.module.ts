import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardGameCategoryPipe } from './boardgame-category.pipe';
import {FormatDatePipe} from "./format-date.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BoardGameCategoryPipe,
    FormatDatePipe
  ],
  exports: [
    BoardGameCategoryPipe,
    FormatDatePipe
  ]
})
export class ApplicationPipesModule {}
