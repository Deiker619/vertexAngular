import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Función de validador
export function passwordMatchValidator(): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const password = formGroup.get('password')?.value;
    const verifyPassword = formGroup.get('verifyPassword')?.value;
    // Si las contraseñas no coinciden
    if (password !== verifyPassword) {
      return { passwordMismatch: true }; // Retorna un error si no coinciden
    } else {
      return null; // Sin errores si coinciden
    }
  };
}