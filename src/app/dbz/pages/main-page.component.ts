import { Component, Input, Output } from '@angular/core';
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

     //3º Output() // Siguiendo con pasos para recibir datos de un hijo con @OutPut. Se crea método
    @Input()
    public onNewCharacterPadre( characterArg: Character){
      console.log(characterArg);

      this.character.push(characterArg);
    }
}


