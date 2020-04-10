import { AbstractControl } from  '@angular/forms';
import { ValidatorFn } from  '@angular/forms';
export const emailValidator = () : ValidatorFn => {
    return (control: AbstractControl) : { [key: string]: string} => {
        const result = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(control.value)
        console.log('Validate email:', result)
        return result==true ? null : {'error' : 'Error format email'}
    };
}