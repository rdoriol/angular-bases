import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] =['Spiderman', 'Ironman', 'Hulk', 'Thor', 'she Hulk'];

  public deletedHero?: string;

  removeLastHeroe(): void {
    this.deletedHero = this.heroNames.pop(); // método pop() elimina último elemento array y lo devuelve como un string

  }




}
