import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', 
  component: DashboardComponent,
  canActivate: [AuthGuard] },
  {path: '', redirectTo:'dashboard', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
