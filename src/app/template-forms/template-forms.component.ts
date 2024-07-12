import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {
  studentObj: any={
    firstName:'',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    zipCode:'',
    isAcceptTerms:false
  }
  formValue:any;

  onSubmit(){
    this.formValue=this.studentObj;
  }

  resetForm(){
    this.studentObj={
      firstName:'',
      lastName:'',
      userName:'',
      city:'',
      state:'',
      zipCode:'',
      isAcceptTerms:false
    }
  }

}
