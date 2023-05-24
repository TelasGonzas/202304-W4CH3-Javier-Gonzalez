import { Character } from "./character.ts";
import { Fighter } from "./fighter.ts";

export class Squire extends Character {
  knight;
  ligma;

  constructor(
    name: string,
    house: string,
    age: number,
    knight: Fighter,
    ligma: number
  ) {
    super(name, house, age);
    this.knight = knight;
    this.ligma = ligma;
    this.sentence = "I'm a loser";
  }
}
