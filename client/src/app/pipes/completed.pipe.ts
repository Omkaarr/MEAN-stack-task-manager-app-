import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'completed'
})
export class CompletedPipe implements PipeTransform {

  transform(value: any[], propName:string, isCompleted: boolean ): any[] {
    const completedTasks=[];
    for(const task of value){
      if(task[propName]=== true){
        completedTasks.push(task);
        
      }
    }
    return completedTasks;
  }
  
}
