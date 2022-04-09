import { Component, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from './models/task';
import { TasklistService } from './services/tasklist.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inProgCount: Number | undefined;
  completeCount: number | undefined;
  archivedCount: number | undefined;
  today: number = Date.now();



  constructor(public tasklistService: TasklistService) { }

  @ViewChildren('inProg') displayedInProg: any;
  @ViewChildren('complete') displayedComplete: any;
  @ViewChildren('archive') displayedArchived: any;

  ngOnInit() {
    this.getTasks();
  }

  ngAfterViewChecked() {
    setTimeout(() => { this.inProgCount = Number(this.displayedInProg.toArray().length); }, 1)
    setTimeout(() => { this.completeCount = Number(this.displayedComplete.toArray().length); }, 1)
    setTimeout(() => { this.archivedCount = Number(this.displayedArchived.toArray().length); }, 1)

  }
  getTasks() {
    this.tasklistService.getTasks().subscribe((res) => {
      this.tasklistService.tasks = res as Task[];
      
    })
  }

  postTask(taskForm: NgForm) {
    if (taskForm.value._id) {
      this.tasklistService.putTask(taskForm.value).subscribe((res) => {
     
        this.getTasks()
        this.tasklistService.selectedTask = new Task()
      })
    } else {
      this.tasklistService.postTask(taskForm.value).subscribe((res) => {
        this.getTasks();
        this.tasklistService.selectedTask = new Task()
      })
    }
  }

  editTask(task: Task) {
    this.tasklistService.selectedTask = task;
  }
  completed(task: Task) {
    this.tasklistService.putTask(task).subscribe((res) => {
      task.isCompleted = true;
      this.tasklistService.selectedTask = task
      
      if (task._id) {
        this.tasklistService.putTask(task).subscribe((res) => {
         
          this.getTasks()
          this.tasklistService.selectedTask = new Task()
        })
      }      
    })
    
  }

  deleteTask(_id: string) {
    this.tasklistService.deleteTask(_id).subscribe((res) => {
      this.tasklistService.selectedTask = new Task();
      this.getTasks()

    })
  }


}

