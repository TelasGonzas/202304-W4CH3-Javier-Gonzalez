import { useCallback, useEffect, useMemo, useState } from "react";
import { ApiRepository } from "../services/api.repositoyr";
import { GotCharacters } from "../types/gotCharacters";
import { consoleError } from "../services/errors";

export function useCharacters() {
  const [characters, setCharacters] = useState<GotCharacters[]>([]);
  const url = "http://localhost:3000/characters/";

  const repo: ApiRepository<GotCharacters> = useMemo(
    () => new ApiRepository<GotCharacters>(url),
    []
  );

  const handleKill = async (character: GotCharacters) => {
    try {
      const killCharacter = await repo.update(character.name, character);
      setCharacters(
        characters.map((item) =>
          item.name === character.name ? killCharacter : item
        )
      );
    } catch (error) {
      consoleError(error);
    }
  };

  return {
    characters,
    handleKill,
  };
}
