import { Character } from "./character.ts";

export class Fighter extends Character {
  weapon;
  skills;

  constructor(
    name: string,
    house: string,
    age: number,
    weapon: string,
    skill: number
  ) {
    super(name, house, age);
    this.weapon = weapon;
    this.skills = skill;
    this.sentence = "Hit first, ask later";
  }
}
