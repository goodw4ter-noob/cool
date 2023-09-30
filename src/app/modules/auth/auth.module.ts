import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AuthCardComponent } from './components/auth-card/auth-card.component';
import { SavedUsersComponent } from './components/saved-users/saved-users.component';



@NgModule({
  declarations: [
    AuthComponent,
    AuthCardComponent,
    SavedUsersComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
