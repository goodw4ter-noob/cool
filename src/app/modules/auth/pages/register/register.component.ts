/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { emailValidationRegExp } from 'src/app/modules/shared/types/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public continueTitle = 'Продолжить';
  public registerTitle = 'Зарегистрироваться';

  public isEmailValid = signal<boolean>(false);

  public checked = true;
  public email = new FormControl<string>('');

  public checkEmail(): void {
    const validationResult = emailValidationRegExp.test(
      this.email.value!
    );
    this.isEmailValid.set(validationResult);
  }
}
