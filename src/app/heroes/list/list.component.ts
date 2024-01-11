import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['The Flash', 'Green Arrow', 'Killer Frost', 'Atom'];
  public deletedHero?: string;

  removeLastHero(): void{
   this.deletedHero = this.heroNames.pop();
  }
}
