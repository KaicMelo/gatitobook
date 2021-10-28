import { Component, Input, OnInit } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const API = environment.API;

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  private urlOriginal = '';

  @Input() descricao = '';

  @Input() set url(url: string) {
    if (startWith('data')) {
      this.urlOriginal = `${API}/imgs/${url}`;
    } else {
      this.urlOriginal = url;
    }
  }

  get url(): string {
    return this.urlOriginal;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
