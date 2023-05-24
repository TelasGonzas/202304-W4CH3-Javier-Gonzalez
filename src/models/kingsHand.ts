import { Character } from "./character.ts";
import { Fighter } from "./fighter";
import { King } from "./king";

export class KingsHand extends Character {
  support;
  sentence;
  constructor(
    name: string,
    house: string,
    age: number,
    support: Fighter | King
  ) {
    super(name, house, age);
    this.support = support;
    this.sentence = " I think I´ll die soon";
  }
}
