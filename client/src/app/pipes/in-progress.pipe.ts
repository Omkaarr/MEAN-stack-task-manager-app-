import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inProgress'
})
export class InProgressPipe implements PipeTransform {

  transform(value: any[], propName:string, isCompleted: boolean ): any[] {
    const inProgressTasks=[];
    for(const task of value){
      if(task[propName]=== false){
        inProgressTasks.push(task);
        
      }
    }
    return inProgressTasks;
  }

}
