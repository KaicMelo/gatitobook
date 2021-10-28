import { AnimaisService } from './../animais.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../animais';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css'],
})
export class DetalheAnimalComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animaisService: AnimaisService,
    private activatedRote: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.animalId = this.activatedRote.snapshot.params.animalId;
    this.animal$ = this.animaisService.buscaPorId(this.animalId);
  }

  like() {
    this.animaisService.curtir(this.animalId).subscribe (like => {
      if(like){
        this.animal$ = this.animaisService.buscaPorId(this.animalId);
      }
    });
  }

  destroy() {
    this.animaisService.exluiAnimal(this.animalId).subscribe(() => {
      this.router.navigate(['/animais/'])
    }, error => console.log(error))
  }

}
