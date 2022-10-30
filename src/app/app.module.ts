import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeNewProjectComponentModule} from "./ui/employee-new-project/employee-new-project.component-module";
import {EmployeeNewServiceModule} from "./services/employee-new.service-module";

@NgModule({
  declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        EmployeeNewServiceModule,
        EmployeeNewProjectComponentModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
