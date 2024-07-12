import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  studentForm: FormGroup=new FormGroup({
    firstName: new FormControl("",Validators.required),
    lastName: new FormControl(""),
    userName: new FormControl("user123@gmail",Validators.email),
    city: new FormControl(""),
    state: new FormControl(""),
    zipCode: new FormControl(""),
    isAcceptTerms: new FormControl("")

  });

  formValue:any;

  onSave(){
    this.formValue=this.studentForm.value;

  }

 

}
