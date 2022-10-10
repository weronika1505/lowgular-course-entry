import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import {PeopleModel} from "../../model/people.model";
import {ProjectModel} from "../../model/project.model";
import {ProjectService} from "../../services/project.service";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  data$ = this._employeeService.getAll();
  constructor(private _employeeService: EmployeeService) {
  }
  remove(id: string) {
    this._employeeService.delete(id).subscribe();
  }
}




