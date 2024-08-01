import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boardGameCategory'
})
export class BoardGameCategoryPipe implements PipeTransform {

  private categoryMap: { [key: string]: string } = {
    'STRATEGY': 'Strategy',
    'FAMILY': 'Family',
    'PARTY': 'Party',
    'CARD_GAME': 'Card game',
    'DICE': 'Dice'
  };

  transform(value: string): string {
    return this.categoryMap[value] || value;
  }

}
