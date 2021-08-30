import { MensagemModule } from './../../componentes/mensagem/mensagem.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoUsuarioComponent } from './novo-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NovoUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MensagemModule
  ]
})
export class NovoUsuarioModule { }
