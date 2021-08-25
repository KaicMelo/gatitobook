import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(private authServie: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authServie.autenticar(this.usuario,this.senha).subscribe(r => {
      this.router.navigate(['animais']);
    },
    err=>{
      console.log('error')
    })
  }
}
