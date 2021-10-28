import { switchMap } from 'rxjs/operators';
import { AnimaisService } from './../animais.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Animais } from './../animais';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  animais$ !: Observable<Animais>;

  constructor(
    private usuarioService: UsuarioService,
    private animaisService: AnimaisService
  ) {}

  ngOnInit(): void {
    this.animais$ = this.usuarioService.retornaUsuario().pipe(
      switchMap( (usuario: any) => {
        const userNamse = usuario.name ?? '';
        return this.animaisService.listaDoUsuaruio(userNamse);
      })
    )
    // this.usuarioService.retornaUsuario().subscribe(usuario => {
    //   const userNamse = usuario.name ?? '';
    //   this.animaisService.listaDoUsuaruio(userNamse).subscribe(animais => {
    //     this.animais = animais;
    //   })
    // })
  }
}
