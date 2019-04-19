import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlluserdataComponent } from '../alluserdata/alluserdata.component';
// import { EmployelistComponent } from '../employelist/employelist.component'; 
import { SharedModule } from '../sharedmodule.module';

@NgModule({
  declarations: [
    AlluserdataComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  bootstrap: [],
 
})
export class AdminModule { 


}
