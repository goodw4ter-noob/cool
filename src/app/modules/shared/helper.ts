import {
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { EMAIL_VALIDATION_ERROR, emailValidationRegExp } from './types/constants';

export const emailValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  return emailValidationRegExp.test(control.value)
    ? null
    : { [EMAIL_VALIDATION_ERROR]: 'Неверный формат email' };
};
