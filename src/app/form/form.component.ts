import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError } from 'rxjs';
import { ThingsToDoComponent } from '../things-to-do/things-to-do.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private http: HttpClient) { }

  public newTask: any;
  @Output() task = new EventEmitter<any>();

  onSubmit(form: NgForm) {
    this.newTask = this.http.post<any>("http://localhost:8080/thingToDo", form.value).subscribe();
  }

  addTask(task: any) {
    this.task.emit(task);
  }
  
}
