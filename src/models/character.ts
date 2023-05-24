export class Character {
  static series = "Game of Thrones";

  name: string;
  house: string;
  age: number;
  alive: boolean;
  sentence: string;

  constructor(name: string, family: string, age: number) {
    this.name = name;
    this.house = family;
    this.age = age;
    this.alive = true;
    this.sentence = "";
  }

  toDie() {
    this.alive = false;
  }

  letWarCryOut() {
    return this.sentence;
  }
}
