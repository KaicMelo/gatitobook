import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Comentarios } from './comentarios';
import { ComentariosService } from './comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  @Input() id!: number;
  comentario$!: Observable<Comentarios>
  comentariosForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private comentarioService: ComentariosService) { }

  ngOnInit(): void {
    this.comentario$ = this.comentarioService.buscaComentario(this.id);
    this.comentariosForm = this.formBuilder.group({
      comentario: ['', Validators.maxLength(300)],
    });
  }

  gravar() {
    const comentario = this.comentariosForm.get('comentario')?.value ?? '';
    this.comentario$ = this.comentarioService.incluiComentario(this.id, comentario)
      .pipe(
        switchMap(() => this.comentarioService.buscaComentario(this.id)), 
        tap(() => {
          this.comentariosForm.reset();
          alert('Salvo com sucesso')
        })
      )
  }
}
