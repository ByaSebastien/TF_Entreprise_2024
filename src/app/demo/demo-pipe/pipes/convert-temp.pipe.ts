import { Pipe, PipeTransform } from '@angular/core';
import { TempUnit } from '../enums/temp-unit';

@Pipe({
  name: 'convertTemp'
})
export class ConvertTempPipe implements PipeTransform {

  transform(value: number, unit: TempUnit = TempUnit.celsius): string {
    switch (unit) {
      case TempUnit.celsius:
        return (value - 32) * 5 / 9 + ' C°';
      case TempUnit.fahrenheit:
        return (value * 9 / 5) + 32 + ' F°';
      default:
        return 'error'
    }
  }

}
