import { NgModule } from '@angular/core';
import { EmployeeNewProjectComponent } from './employee-new-project.component';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
  declarations: [EmployeeNewProjectComponent],
  providers: [],
  exports: [EmployeeNewProjectComponent]
})
export class EmployeeNewProjectComponentModule {
}
