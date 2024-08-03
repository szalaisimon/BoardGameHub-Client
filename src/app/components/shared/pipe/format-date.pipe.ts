import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDatePipe'
})
export class FormatDatePipe implements PipeTransform {

  // 2024-08-02T16:30:00.000000 => 2024-08-02 16:30

  transform(value: string): string {
    return value.substring(0, 16).replace('T', ' ');
  }

}
