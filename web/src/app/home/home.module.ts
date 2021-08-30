import { NovoUsuarioModule } from './novo-usuario/novo-usuario.module';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MensagemModule,
    NovoUsuarioModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
