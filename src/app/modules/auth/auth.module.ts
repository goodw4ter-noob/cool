import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthCardComponent } from './components/auth-card/auth-card.component';
import { SavedUsersComponent } from './components/saved-users/saved-users.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ShowCloseBtnDirective } from './directives/show-close-btn.directive';
import { RegisterComponent } from './pages/register/register.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    AuthCardComponent,
    SavedUsersComponent,
    ShowCloseBtnDirective,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputNumberModule,
    NzButtonModule,
    NzCardModule,
    NzIconModule,
    NzCheckboxModule,
  ],
})
export class AuthModule {}
