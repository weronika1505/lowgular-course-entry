import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PeopleModel } from '../model/people.model';
import { CreateEmployeeModel } from '../model/create-employee.model';
import {ApiResponse} from "./api.response";
import {EmployeeResponse} from "./employee.response";
import {EmployeeModel} from "../model/employee.model";


@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel>{
    return this._httpClient.get<EmployeeModel>(url 'https://dummy.restapiexample.com/api/v1/employees';)
  }
}
