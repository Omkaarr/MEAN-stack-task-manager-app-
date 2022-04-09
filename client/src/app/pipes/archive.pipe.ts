import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'archive'
})
export class ArchivePipe implements PipeTransform {

  transform(value:any[]): any[]{
    var n=value.length;
    var size=n-10;
    return value.slice(0,size);
  }

}
