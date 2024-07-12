import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName: string="Angular 17";
  inputType ="checkbox";
  cityName:string="FSD";
  rollNo:number=123;
  isPak : boolean=true;
  currentDate: Date= new Date();
  firstName = signal("Fawad");

  constructor(){

  }
  changeCourseName(){
    this.courseName="ReactJS"
    this.firstName.set("Ali")

  }
  prevCourseName(){
    this.courseName="Angular 17"
    this.firstName.set("Fawad")
  }

  showAlert(message : string){
    alert(message);

  }

}
