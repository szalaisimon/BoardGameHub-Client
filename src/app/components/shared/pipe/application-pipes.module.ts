import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardGameCategoryPipe } from './boardgame-category.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BoardGameCategoryPipe
  ],
  exports: [
    BoardGameCategoryPipe
  ]
})
export class ApplicationPipesModule {}
