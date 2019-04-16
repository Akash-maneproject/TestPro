import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
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
import { AngularFirestoreModule  } from '@angular/fire/firestore';
import { AngularFireDatabaseModule  } from '@angular/fire/database';
import {environment } from '../environments/environment';
import { AlertComponent } from './alert/alert.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', 
  component: DashboardComponent,
  canActivate: [AuthGuard]
 },
  {path: '', redirectTo:'login', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent  },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.fireBaseconfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap: [AppComponent],
})
export class AppModule { }