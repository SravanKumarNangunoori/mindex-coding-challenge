import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatDialogModule, MatFormFieldModule, MatCardModule ,MatTableModule, MatDividerModule,MatBadgeModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule} from '@angular/material';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppComponent} from './app.component';
import {BackendlessMockService} from './backendless-mock.service';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeService} from './employee.service';
import { EditDeletmodalComponent } from './edit-deletmodal/edit-deletmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EditDeletmodalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(BackendlessMockService, {
      apiBase: 'api/',
      delay: 250,
      passThruUnknownUrl: true,
      post204: false,
      put204: false
    }),
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,MatBadgeModule,MatTableModule,MatDividerModule,MatDialogModule, MatFormFieldModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],

  entryComponents: [EditDeletmodalComponent]
})
export class AppModule {
}
