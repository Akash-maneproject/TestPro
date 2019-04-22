import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EmployelistComponent } from './employelist/employelist.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserModule } from '@angular/platform-browser';

// import { CustomerComponent } from './customer.component';
// import { NewItemDirective } from './new-item.directive';
// import { OrdersPipe } from './orders.pipe';
 
@NgModule({
 imports:      [ CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
    
],
 declarations: [ EmployelistComponent,RegistrationComponent],
 exports:      [ EmployelistComponent, RegistrationComponent,FormsModule,ReactiveFormsModule,BrowserModule]
})
export class SharedModule { }

