import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  public name: string = "ironman";
  public age: number = 45;

    // getter
  get capitalizarName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
    return this.name + " - " + this.age;
  }

    //setter

  set nameChange(name: string) {
    this.name = name;
  }

  // setter

  set ageChange(age: number) {
    this.age = age;
  }

  changeName(name: string):void {
    this.name = name;
  }

  changeAge(age: number): void {
    this.age = age;
  }

  resetForm():void {
    this.name = 'Ironman';
    this.age = 45;
  }



}
