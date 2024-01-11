import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  public name: string = 'Flash';
  public age: number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroeDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  chageHero(): void{
    this.name = 'Green Arrow';
  }

  changeAge(): void{
    this.age = 30;
  }

  resetForm(): void{
    this.name = 'Flash';
    this.age = 45;

    // Cambia el dato al primer elemento de etiqueta que encuentra en codigo
    // document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>'

    // Cambia el dato de todos los elementos
    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });

  }

}
