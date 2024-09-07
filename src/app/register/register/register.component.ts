import { CommonModule, JsonPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';

import {
  ReactiveFormsModule,
  FormControl,
  Validators,
  FormGroup,
  FormsModule,
} from '@angular/forms';
import { passwordMatchValidator } from './validators/passwordMatch.validator';
import { Cliente } from '../../model/cliente.model';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private RegisterService: RegisterService) {}
  cliente?: Cliente

  get name() {
    return this.RegisterForm.get('name') as FormControl; 
  }
  get lastname() {
    return this.RegisterForm.get('lastName') as FormControl; 
  }
  RegisterForm = new FormGroup(
    {
      name: new FormControl('',[ Validators.required]),
      lastName: new FormControl('', [Validators.required, ]),
      telefono: new FormControl('', [Validators.required, Validators.min(11), Validators.maxLength(11)]),
      direccion: new FormControl('', [Validators.required]),
      codigoPostal: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      verifyPassword: new FormControl('', [Validators.required]), // Campo para verificar contraseña
    },
    { validators: passwordMatchValidator() }
  ); // Aplica el validador a nivel de FormGroup

  onSubmitRegister() {
    this.cliente = this.RegisterForm.value as Cliente;
    this.RegisterService.RegisterCliente(this.cliente)
  }

}

// Validador a nivel de FormGroup
/* passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl)  => {
      const formGroup = control as FormGroup; 
      const password = formGroup.get('password')?.value;
      const verifyPassword = formGroup.get('verifyPassword')?.value;
      // Si las contraseñas no coinciden o alguno de los campos está vacío
      if (password !== verifyPassword) {
        formGroup.get('verifyPassword')?.setErrors({ passwordMismatch: true }); // Asigna el error al campo verifyPassword
      } else {
        formGroup.get('verifyPassword')?.setErrors(null); // Elimina el error si coinciden
      }
      return null;
    };
  } */
