import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit{
  deptObj:any={
    "departmentId": 0,
    "departmentName": "string",
    "departmentLogo": "string"
  };

  deptList : any[]=[];

  http=inject(HttpClient);
ngOnInit(): void {
  this.getDept();
}

  onSave(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.deptObj).subscribe((res:any)=>{
      if(res.result){
        alert("Department Created Success");
        this.getDept();

      }else{
        alert(res.message) 
      }

    })
  }

  onUpdate(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment",this.deptObj).subscribe((res:any)=>{
      if(res.result){
        alert("Department Updated  Success");
        this.getDept();

      }else{
        alert(res.message) 
      }

    })

  }
  getDept(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
      this.deptList=res.data;

    })
  }

  onEdit(data:any){
    this.deptObj=data;
  }

  onDelete(id:number){
    const isDelete= confirm("Are you sure you want to delete?")
    if(isDelete){
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" +id).subscribe((res:any)=>{
        if(res.result){
          alert("Department Deleted Success");
          this.getDept();

        }else{
          alert(res.message) 
        }

      })
  }

  }
}
