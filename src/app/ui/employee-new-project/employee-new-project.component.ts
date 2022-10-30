import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EmployeeNewProjectModel} from "../../model/employee-new-project.model";
import {Observable} from "rxjs";
import {EmployeeNewService} from "../../services/employee-new.service";
import {EmployeeResponse} from "../../services/employee.response";

@Component({
  selector: 'app-employee-new-project',
  templateUrl: './employee-new-project.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeNewProjectComponent {
  constructor(private _employeeNewService: EmployeeNewService) {}

  data$: Observable<EmployeeNewProjectModel[]> = this._employeeNewService.getAll();

  remove(id: string) {
    this._employeeNewService.delete(id).subscribe();
  }
}
