import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Task } from '../models/task';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TasklistService {
  selectedTask: Task;
  tasks: Task[] = [];
 
  constructor(private http: HttpClient) {
    this.selectedTask = new Task()
  }

  getTasks() {
    return this.http.get(`/api`)
  }
  postTask(task: Task) {
    return this.http.post(`/api`, task)
  }
  putTask(task: Task) {
    return this.http.put(`/api/${task._id}`, task)
  }
  deleteTask(_id: string) {
    return this.http.delete(`/api/${_id}`)
  }
}
