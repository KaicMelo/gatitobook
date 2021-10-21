import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../autenticacao/token.service';
import { Animais } from './animais';

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private hhtp: HttpClient, private tokenService: TokenService) { }

  listaDoUsuaruio(nomeDoUsuario: string): Observable<Animais>{
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token',token);
    return this.hhtp.get<Animais>(`${API}/${nomeDoUsuario}/photos`,{
      headers
    });
  }
}
