import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-add-character',
  templateUrl: './addCharacter.component.html',
  styleUrls: ['./addCharacter.component.css']
})
export class AddCharacterComponent {

                  // @Output(). Pasos:
      //1º  // Para comunicar con el padre se utilizará @Output(). Para ello desde donde
      // queremos emitir se instancia objeto de tipo/evento "EventEmitter" (que es un evento)
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


      // objeto character donde se recibirán los inputs del formulario
  public character: Character = {
    name: "",
    power: 0
  }

  // método de prueba
 mostrarCharacters(): void {
    if(this.character.name.length === 0) return;

          // La expresión anterior es igual a la comentada a continuación:
                  /* if(this.character.name.length == 0) {
                        return;
                      }*/

     //2º // Se utiliza objeto instanciado EventEmitter para 'emitir/enviar' objeto character
  this.onNewCharacter.emit(this.character);

  //this.character.name = "";
  //this.character.power = 0;
 }





}
