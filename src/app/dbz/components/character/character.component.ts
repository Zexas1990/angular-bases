import { Component, EventEmitter, Output } from '@angular/core';
import {v4 as uuid } from 'uuid'
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    id: '',
    name: '',
    power: 0
  };

  emitCharacter():void{

    if( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    this.character = { id: uuid(), name: '', power: 0 };

  }
}
