import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Animais } from '../animais';
import { AnimaisService } from '../animais.service';

@Injectable({
  providedIn: 'root'
})
export class ListaAnimaisResolver implements Resolve<boolean> {

  constructor(private animaisService: AnimaisService, private usuarioService: UsuarioService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.usuarioService.retornaUsuario().pipe( switchMap( (usuario) => {
      const userName = usuario.name ?? ''; 
      return this.animaisService.listaDoUsuaruio(userName);
    }) )
  }
}
