import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../autenticacao/token.service';
import { Animais, Animal } from './animais';

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private hhtp: HttpClient, private tokenService: TokenService) { }

  listaDoUsuaruio(nomeDoUsuario: string): Observable<Animais>{
    return this.hhtp.get<Animais>(`${API}/${nomeDoUsuario}/photos`);
  }

  buscaPorId(id: number): Observable<Animal>{
    return this.hhtp.get<Animal>(`${API}/photos/${id}`);
  }

  exluiAnimal(id: number): Observable<Animal>{
    return this.hhtp.delete<Animal>(`${API}/photos/${id}`);
  }
}
