import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable, map } from 'rxjs';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [AsyncPipe,DatePipe,JsonPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})

export class PipesComponent {
  currentDate: Date= new Date();
  currentTime : Observable<Date>=new Observable<Date>;
  
  student : any={
    name:'ali',
    city : 'Lhr',
    empId : 123
  };

  constructor(){
    this.currentTime = interval(1000).pipe(map(()=> new Date()));
  }

}
