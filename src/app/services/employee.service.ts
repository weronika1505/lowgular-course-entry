import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, pipe} from "rxjs";
import {PeopleModel} from "../model/people.model";
import {CreateEmployeeModel} from "../model/create-employee.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }
  getAll(): Observable<PeopleModel[]> {
    return this._httpClient.get<PeopleModel[]>("assets/data/people.json")
  }
  create(employee: CreateEmployeeModel): Observable<void>{
    return this._httpClient.post('https://dummy.restapiexample.com/create', employee).pipe(map( _=>void 0));
  }

}
