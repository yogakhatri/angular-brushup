import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const value = control.value as string;
    // console.log(
    //   '🚀 ~ file: email-validator.directive.ts:24 ~ EmailValidatorDirective ~ validate ~ value:',
    //   value
    // );

    if (value?.includes('test')) {
      return {
        invalidEmail: true,
      };
    }
    return null;
  }
}
