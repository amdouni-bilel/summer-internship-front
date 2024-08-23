import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
// Validateur pour vérifier que le champ ne contient que des lettres
export function lettersOnlyValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = /[^a-zA-Z\s]/.test(control.value);
    return forbidden ? { 'lettersOnly': { value: control.value } } : null;
  };
}

// Validateur pour vérifier que le champ ne contient que des chiffres et exactement 8 chiffres
export function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = /^\d{8}$/.test(control.value);
    return !valid ? { 'phoneNumber': { value: control.value } } : null;
  };}
  export function noSpacesValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && control.value.trim().length === 0) {
        return { 'noSpaces': true };
      }
      return null;
    };
}
