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
  getAll(): Observable<PeopleModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees')
      .pipe(
        map((response: ApiResponse<EmployeeResponse[]>): PeopleModel[] => {
          return response.data.map((employeeResponse: EmployeeResponse) => {
          return {
          name: employeeResponse.employee_name,
          personalNumber: employeeResponse.id,
          img: employeeResponse.profile_image,
          mail: employeeResponse.employee_name + '@lowgular.io',
          };
          });
        })
      );
}

  create(employee: CreateEmployeeModel): Observable<void> {
    return this._httpClient.post('https://dummy.restapiexample.com/', employee).pipe(map(_ => void 0));
  }

  delete(id: string): Observable<void> {
    return this._httpClient.delete('https://dummy.restapiexample.com/api/v1/delete/2' + id).pipe(map( _ => void 0));
  }
}
