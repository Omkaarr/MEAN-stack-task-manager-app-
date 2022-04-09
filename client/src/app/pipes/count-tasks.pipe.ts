import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countTasks'
})
export class CountTasksPipe implements PipeTransform {

  transform(value: any[], count: number): any[] {
    const tasksDisplayed = [];
    for (let i = 0; i < count; i++){
      tasksDisplayed.push(value[i]);
    }

  }

}
