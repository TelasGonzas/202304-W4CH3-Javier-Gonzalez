import { Character } from "./character.ts";

export class Fighter extends Character {
  weapon;
  skill;

  constructor(
    name: string,
    house: string,
    age: number,
    weapon: string,
    skill: number
  ) {
    super(name, house, age);
    this.weapon = weapon;
    this.skill = skill;
    this.sentence = "Hit first, ask later";
  }
}
