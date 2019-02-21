import { AbstractControl, ValidationErrors } from '@angular/forms';

export class FormValidators {

    static mustContainSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0 && (control.value as string).indexOf(' ') < (control.value as string).length -1)
            return null;
        return { mustContainSpace: true};
    }

    static invalidPhoneNumber(control: AbstractControl) : ValidationErrors | null {
        let regexp: RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if(regexp.test(control.value as string)){
            return null;
        }
        return { invalidPhoneNumber: true };
    }
}