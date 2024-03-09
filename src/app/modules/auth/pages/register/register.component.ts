/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emailValidator } from 'src/app/modules/shared/helper';
import { EMAIL_VALIDATION_ERROR, REGISTER_TITLE, SAVE_CREDENTIALS_TITLE, VALIDATING_TIP } from 'src/app/modules/shared/types/constants';
import { ModelToForm } from 'src/app/modules/shared/types/types';

interface RegisterFormModel {
  email: string;
}

type RegisterForm = ModelToForm<RegisterFormModel>;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public emailValidationError = EMAIL_VALIDATION_ERROR;
  public validatingTip = VALIDATING_TIP;
  public registerTitle = REGISTER_TITLE;
  public saveCredentialsTitle = SAVE_CREDENTIALS_TITLE;
  public form!: FormGroup<RegisterForm>;

  public checked = true;

  constructor(private readonly fb: FormBuilder) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public submit(): void {
    console.log('submitted');
  }

  private initForm(): void {
    const form = this.fb.group({
      email: this.fb.control<string>('', {
        nonNullable: true,
        validators: [emailValidator],
      }),
    });

    this.form = form;
  }
}
