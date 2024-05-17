import { Pipe, PipeTransform } from '@angular/core';
import { TempUnit } from '../enums/temp-unit';
import { UnitTemp } from '../models/unit-temp';

@Pipe({
  name: 'convertTemp'
})
export class ConvertTempPipe implements PipeTransform {

  transform(value: number, unit: UnitTemp = "cel"): string {
    switch (unit) {
      case "cel":
        return (value - 32) * 5 / 9 + ' C°';
      case "far":
        return (value * 9 / 5) + 32 + ' F°';
      default:
        return 'error'
    }
  }

}
