// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import {  } from "@angu";
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth.guard';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AlertComponent } from './alert/alert.component';
import { PagenotfounddataService } from './pagenotfounddata.service';
// import { NavbarComponent } from './navbar/navbar.component';
// import { RegistrationComponent } from './registration/registration.component';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { EmployelistComponent } from './employelist/employelist.component';
import { AdminModule } from '../app/admin/admin.module';
import { AlluserdataComponent } from './alluserdata/alluserdata.component';
import { SharedModule } from './sharedmodule.module';
import { NgxLoadingModule } from 'ngx-loading';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home/home.component';
import { NewappdataComponent } from './alluserdata/newappdata/newappdata.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: 'dashboard',
    component: DashboardComponent, children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'alluserdata',
        component: AlluserdataComponent, canActivate: [AuthGuard]
      },
      { path: 'pagenotfound', 
        component: PagenotfoundComponent
         
      },
      { path: 'newappdata', 
        component: NewappdataComponent, 
        outlet: 'r2' 
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },

  // {path: '', redirectTo:'login', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent },


];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    AlertComponent,
    NavbarComponent,
    HomeComponent,
    NewappdataComponent,
    // RegistrationComponent,
    // EmployelistComponent,


  ],
  imports: [
    // BrowserModule,
    // AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.fireBaseconfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ModalModule.forRoot(),
    AdminModule,
    SharedModule,
    NgxLoadingModule.forRoot({})


  ],
  // exports:[
  //   EmployelistComponent
  // ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }  
