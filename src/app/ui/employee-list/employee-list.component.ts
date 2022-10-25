import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import {PeopleModel} from "../../model/people.model";
import {ProjectModel} from "../../model/project.model";
import {ProjectService} from "../../services/project.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  constructor(private _httpClient: HttpClient) {
  data$: Observable<EmployeeService[] | null> this._httpClient.get<EmployeeService[]>(url 'https://dummy.restapiexample.com/api/v1/employees');
}}




