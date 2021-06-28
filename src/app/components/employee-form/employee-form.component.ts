import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import Swal from 'sweetalert2';
import { Employee } from '../../models/Employee';
import { EmployeesService } from '../../services/employees.service';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  @HostBinding('class') classes = 'row'

  empleado:Employee ={
    name : '',
    last_name: '',
    email: ''
  };

  edit: boolean  = false;

  constructor(private employeeService:EmployeesService, private route:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
   const {id} =  this.activeRoute.snapshot.params;
   if(id){
     this.employeeService.getEmpleado(id).subscribe(
       res =>{
         let resp:any = res
         this.edit = true;
         this.empleado = resp.empleado
       },
       err=>{
         console.error(err);
       });
   }
  }

  saveNewEmployee(){
    this.employeeService.saveEmpleado(this.empleado).subscribe(
      res =>{
        console.log(res);
        this.route.navigate(['/employees']);
      },
      err =>{
        Swal.fire({
          title: 'Error',
          text: err.error.errors[0].msg,
          icon: 'error',
          showCancelButton: true,
          confirmButtonText: 'Ok'
        });
      }
    );

  }

  updateGame(){
    this.employeeService.updateEmpleado(this.empleado.idemployee!!, this.empleado).subscribe(
      res =>{
        console.log(res);
        this.route.navigate(['/employees']);
      },
      err =>{
        console.log(err.error);
      }
    )
  }

}
