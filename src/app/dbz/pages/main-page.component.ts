import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public titleMain: string = 'DBZ Personajes';

  public character: Character[] = [
    {
      name: 'Krilin',
      power: 1000
    },
    {
      name: 'Koku',
      power: 9500
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];
}


