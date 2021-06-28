import { Component, HostBinding, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  empleados: any = []

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getEmpleados().subscribe((res:any)=>{
      this.empleados = res.empleados
    })
  }

  getEmployees(){
    this.employeesService.getEmpleados().subscribe((res:any)=>{
      this.empleados = res.empleados
    })
  }

  deleteEmployee(id:string){
    this.employeesService.deleteEmpleado(id).subscribe(
      res =>{
        console.log(res);
        this.getEmployees();
      },
      err =>{
        console.error(err);
      }
    );
  }

}
