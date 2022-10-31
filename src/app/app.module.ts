import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeNewProjectComponentModule} from "./ui/employee-new-project/employee-new-project.component-module";
import {EmployeeNewServiceModule} from "./services/employee-new.service-module";
import {EmployeeFormComponent} from "./ui/employee-form/employee-form.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, EmployeeFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeNewServiceModule,
    EmployeeNewProjectComponentModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
