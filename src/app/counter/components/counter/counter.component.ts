import { TemplateBindingParseResult } from '@angular/compiler';
import { Component } from '@angular/core';

@Component ({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent {

  public title: string = 'Hola Mundo';
  public counter: number = 10;

    // 1ª opción para incrementar/decrementar contador (dos métodos)
  incrementar(): number {
    this.counter += 1;
    return this.counter;
  }

  decrementar(): number {
    this.counter -= 1;
    return this.counter;
  }

    // 2ª Opción más simple para incrementar/decrementar contador
  increaseBy(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }

}
