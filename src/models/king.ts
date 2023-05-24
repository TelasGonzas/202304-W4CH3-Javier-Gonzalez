import { Character } from "./character.ts";

export class King extends Character {
  reignYears;

  constructor(name: string, house: string, age: number, reignYears: number) {
    super(name, house, age);
    this.reignYears = reignYears;
    this.sentence = "You're all gonna die";
  }
}
