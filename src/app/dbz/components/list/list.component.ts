import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Input()
  public characterInput: Character[] = [];
          // Eliminar personaje del listado


  @Output()
  onDeleteId: EventEmitter<number> = new EventEmitter();






  onDeleteCharacter(index: number): void {
    // TODO: Emitir el ID del personaje
    console.log({index});
  }

}
