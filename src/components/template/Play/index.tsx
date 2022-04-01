import { pokemonList } from "./pokemonList";
import { useEffect, useState } from "react";
import { PokemonCard } from "~/src/components/shared/PokemonCard";
import * as styles from "./styles";

export interface Pokemon {
  imagePath: string;
  japanese: string;
  romaji: string;
}

export const PlayTemplate = (): JSX.Element => {
  const [keyValue, setKeyValue] = useState<string>("");
  const [answerValue, setAnswerValue] = useState<string>("");
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [newPokemon, setNewPokemon] = useState<Pokemon[]>([]);
  const [pokemonName, setPokemonName] = useState<string[]>([]);
  const [missCounter, setMissCounter] = useState<number>(0);
  const [currentNumber, setCurrentNumber] = useState<number>(0);

  const keyDown = (e: KeyboardEvent) => {
    setKeyValue(e.key);
  };

  useEffect(() => {
    if (keyValue !== "" && pokemonName[currentNumber] !== keyValue) {
      setMissCounter((count) => count + 1);
      setKeyValue("");
    } else if (keyValue && pokemonName[currentNumber] === keyValue) {
      setCurrentNumber(currentNumber + 1);
      setAnswerValue((val) => val + keyValue);
    }
  }, [keyValue]);

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    setPokemon(pokemonList[Math.floor(Math.random() * pokemonList.length)]);
  }, []);

  useEffect(() => {
    if (pokemon) {
      setPokemonName(pokemon.romaji.split(""));
    }
  }, [pokemon]);

  useEffect(() => {
    if (pokemonName) {
      console.log(pokemonName);
    }
  }, [pokemonName]);

  useEffect(() => {
    if (answerValue === pokemon?.romaji) {
      setAnswerValue("");
      alert("sucsess");
      const snapshot = pokemonList.filter(
        (snapshot) => snapshot.romaji !== pokemon.romaji
      );
      setNewPokemon([...snapshot]);
      setCurrentNumber(0);
    }
  }, [answerValue]);

  useEffect(() => {
    if (newPokemon) {
      // setPokemon(newPokemon[Math.floor(Math.random() * pokemonList.length)]);
      console.log(newPokemon);
    }
  }, [newPokemon]);

  return (
    <div css={styles.play}>
      <h1>タイピングページ</h1>
      <p>prevType: {keyValue}</p>
      <p>Answer: {answerValue}</p>
      <p>ミスした数: {missCounter}</p>
      <PokemonCard pokemonItem={pokemon} />
    </div>
  );
};

export default PlayTemplate;
