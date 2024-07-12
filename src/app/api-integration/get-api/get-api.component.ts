import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  userList:any []=[];
  customerList:any[]=[];
  
  constructor(private http:HttpClient){
    this.getAllUser();
    this.getAllCustomer();

  }

  getAllUser(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{

      this.userList=result;

    })
  }

  getAllCustomer(){
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((result:any)=>{
      this.customerList=result.data;
    },error=>{
      debugger;
    })
  }

}
