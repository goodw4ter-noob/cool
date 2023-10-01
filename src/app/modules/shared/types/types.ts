import { FormControl } from '@angular/forms';

export type ModelToForm<T extends object> = {
  [key in keyof T]: FormControl<T[key]>;
};
