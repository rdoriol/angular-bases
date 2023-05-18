import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-add-character',
  templateUrl: './addCharacter.component.html',
  styleUrls: ['./addCharacter.component.css']
})
export class AddCharacterComponent {
  public character: Character = {
    name: "",
    power: 0
  }

  public charactersPersons: Character[] = []

public inputCharacter: Character = {
  name: "Robertaco", // se capturará el input name del form
  power: 500  // se capurará el input power del form
}


 inputCharactars = this.charactersPersons.push(this.inputCharacter);

 mostrarCharacters(): void {
  console.log(this.character);
 }

}
