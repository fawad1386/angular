import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  isDiv1Visible:boolean=false;
  isDiv2Visible:boolean=false;
  num1:string='';
  num2:string='';
  isActive:boolean=false;
  selectedCity:string='';
  cityArray:string []=['Lahore','Karachi','Kashmir'];

  constructor(private router : Router){

  }
  showDiv1(){
    this.isDiv1Visible=true;
  }
  hideDiv1(){
    this.isDiv1Visible=false;
  }
  toggleDiv2(){
    this.isDiv2Visible= !this.isDiv2Visible;
  }

  navigateToDataBinding(){
    this.router.navigateByUrl("data-binding");
  }

}
