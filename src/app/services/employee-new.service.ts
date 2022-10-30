import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeNewProjectModel } from '../model/employee-new-project.model';
import { ApiResponse } from './api.response';
import { EmployeeResponse } from './employee.response';

@Injectable()
export class EmployeeNewService {
  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<EmployeeNewProjectModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>
      ('https://dummy.restapiexample.com/api/v1/employees').pipe(
        map((response: ApiResponse<EmployeeResponse[]>): EmployeeNewProjectModel[] => {
          return response.data.map((employeeResponse: EmployeeResponse) => {
            return {
              id: employeeResponse.id,
              name: employeeResponse.employee_name,
              salary: employeeResponse.employee_salary,
              age: employeeResponse.employee_age,
            }
          });
        })
      )
  }

  delete(id: string): Observable<void> {
    return this._httpClient.delete('https://dummy.restapiexample.com/api/v1/delete/' + id)
      .pipe(map( _ => void 0));
  }
}
