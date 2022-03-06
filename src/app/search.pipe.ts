import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, filterWord: string): any {
    if (value.length === 0 || filterWord === undefined || filterWord === '') {
      return value;
    }
    const resultArray = [];
    for (let item of value) {
      if (
        item.name.toUpperCase().includes(filterWord.toUpperCase()) ||
        // item.phone.includes(filterWord) ||
        item.email.toUpperCase().includes(filterWord.toUpperCase()) ||
        item.country.toUpperCase().includes(filterWord.toUpperCase()) ||
        item.age.toString().includes(filterWord)
        // item.color.toUpperCase().includes(filterWord.toUpperCase()) ||
        // item.postalZip.toUpperCase().includes(filterWord.toUpperCase())
      ) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
