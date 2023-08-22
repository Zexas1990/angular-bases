import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  //Me va a permitir usar toda la inofrmacion que este usada en este servicio
  constructor( private dbzService: DbzService){}

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void{
    this.dbzService.deleteCharacterById( id )
  }

  onNewCharacter( character: Character){
    this.dbzService.addCharacter( character );
  }
}
