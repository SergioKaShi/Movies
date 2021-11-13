import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
  transform(minutes: number): string {
    return this.getTimeString(minutes);
  }

  private getTimeString(timeMinutes: number) {
    const hours = Math.floor(timeMinutes / 60);
    const minutes = timeMinutes - (hours * 60);

    return `${hours.toString()}h ${minutes.toString()}m`;
  }

}
