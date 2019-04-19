import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployelistComponent } from './employelist/employelist.component';
// import { CustomerComponent } from './customer.component';
// import { NewItemDirective } from './new-item.directive';
// import { OrdersPipe } from './orders.pipe';
 
@NgModule({
 imports:      [ CommonModule ],
 declarations: [ EmployelistComponent],
 exports:      [ EmployelistComponent]
})
export class SharedModule { }

