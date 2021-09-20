import { Usuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private TokenService: TokenService) {
    if (this.TokenService.possuiToken()) {
      this.decodificaJwt();
    }
  }

  private decodificaJwt() {
    const token = this.TokenService.retornaToken();
    const usuario = jwtDecode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario() {
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string) {
    this.TokenService.salvaToken(token);
    this.decodificaJwt();
  }

  logout() {
    this.TokenService.excluiToken();
    this.usuarioSubject.next({});
  }

  estaLogado(){
    return this.TokenService.possuiToken();
  }
}
