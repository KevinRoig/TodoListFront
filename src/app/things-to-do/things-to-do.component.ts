import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-things-to-do',
  templateUrl: './things-to-do.component.html',
  styleUrls: ['./things-to-do.component.css']
})
export class ThingsToDoComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public thingsToDo: any;

  ngOnInit(): void {
    this.getThingsToDo();
  }

  public getThingsToDo() {
    return this.http.get("http://localhost:8080/thingstodo")
    .pipe(
      take(1),
      map(data => this.thingsToDo = data)
    )
      .subscribe()
  };

  public delete(id: number){
    return this.http.delete("http://localhost:8080/thingstodo/" + id)
    .pipe(
      take(1),
      tap(() => this.getThingsToDo()
    ))
    .subscribe();
  }

  addTask(task: any) {
    this.thingsToDo.push(task);
    setTimeout(() => {
       this.getThingsToDo();
    }, 100);
   
  }
}