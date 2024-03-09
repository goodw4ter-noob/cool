import {
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import {
  EMAIL_VALIDATION_ERROR,
  emailValidationRegExp,
} from './types/constants';
import { HttpInterceptorFn } from '@angular/common/http';

export const emailValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  return emailValidationRegExp.test(control.value)
    ? null
    : { [EMAIL_VALIDATION_ERROR]: 'Неверный формат email' };
};

export const authInterceptor: HttpInterceptorFn = (
  request,
  next
) => {
  const token = localStorage.getItem('token') ?? '';
  request = request.clone({
    setHeaders: {
      Authorization: token ? `Token ${token}` : '',
    },
  });

  return next(request);
};
