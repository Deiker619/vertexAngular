import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpCliente: HttpClient) { }

  RegisterCliente(Cliente: Cliente){
    this.httpCliente.post('', Cliente)
    console.log(Cliente)
  }
}
