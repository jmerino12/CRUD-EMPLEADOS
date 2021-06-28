import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee } from '../models/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  API_URI = 'http://localhost:30001/api';

  constructor(private http:HttpClient) { }

  getEmpleados(){
    return this.http.get(`${this.API_URI}/employee`);
  }

  getEmpleado(id:string){
    return this.http.get(`${this.API_URI}/employee/${id}`);
  }

  deleteEmpleado(id:string){
    return this.http.delete(`${this.API_URI}/employee/${id}`);

  }
  
  saveEmpleado(empleado:Employee){
    return this.http.post(`${this.API_URI}/employee`,empleado);
  }

  updateEmpleado(id:string | number,empleado:Employee){
    return this.http.put(`${this.API_URI}/employee/${id}`,empleado);
  }
}
