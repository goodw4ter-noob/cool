import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_ROUTES_NAMES } from 'src/app/modules/shared/types/constants';
import { ModelToForm } from 'src/app/modules/shared/types/types';

export interface LoginFormModel {
  login: string;
  password: string;
}

export type LoginForm = ModelToForm<LoginFormModel>;

@Component({
  selector: 'app-auth-card',
  templateUrl: './auth-card.component.html',
  styleUrls: ['./auth-card.component.scss'],
})
export class AuthCardComponent implements OnInit {
  public loginPlaceholder = 'Телефон или почта';
  public passwordPlaceholder = 'Пароль';
  public loginForm!: FormGroup<LoginForm>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public login(): void {
    console.log(this.loginForm.getRawValue());
  }

  public goToRegistration(): void {
    void this.router.navigate(
      [APP_ROUTES_NAMES.registration],
      {
        relativeTo: this.route,
      }
    );
  }

  private initForm(): void {
    const form: FormGroup<LoginForm> =
      this.fb.nonNullable.group({
        login: ['', Validators.required],
        password: ['', Validators.required],
      });

    this.loginForm = form;
  }
}
