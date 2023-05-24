import { Fighter } from "../models/fighter.ts";
import { King } from "../models/king.ts";
import { KingsHand } from "../models/kingsHand.ts";
import { Squire } from "../models/squire.ts";
import { GotCharacters } from "../types/gotCharacters.tsx";

export const createCards = () => {
  const list: GotCharacters[] = [];

  const joffrey = new King("Joffrey", "Baratheon", 15, 2);

  const jaime = new Fighter("Jaime", "Lannister", 35, "Metal hand", 9);

  const daenerys = new Fighter("Daenerys", "Targaryen", 20, "Drake", 10);

  const tyrion = new KingsHand("Tyrion", "Lannister", 32, daenerys);

  const bronn = new Squire("Bronn", "BlackWaters", 45, jaime, 0);

  list.push(joffrey, jaime, daenerys, tyrion, bronn);

  return list;
};
