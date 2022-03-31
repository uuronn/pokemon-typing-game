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
  const [pokemonName, setPokemonName] = useState<string[]>([]);
  const [missCounter, setMissCounter] = useState<number>(0);
  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const [correctCounter, setCorrectCounter] = useState<number>(0);
  const [time, setTime] = useState<number>(5);

  const keyDown = (e: KeyboardEvent) => {
    setKeyValue(e.key);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setTime((count) => count - 1);
    }, 1000);

    if (time === 0) {
      alert("終了");
      clearTimeout(id);
      console.log(correctCounter);
    }
  }, [time]);

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    setPokemon(pokemonList[Math.floor(Math.random() * pokemonList.length)]);
  }, []);

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
    if (pokemon) {
      setPokemonName(pokemon.romaji.split(""));
    }
  }, [pokemon]);

  useEffect(() => {
    if (answerValue === pokemon?.romaji) {
      setAnswerValue("");
      // alert("success");
      setCorrectCounter((count) => count + 1);
      setPokemon(pokemonList[Math.floor(Math.random() * pokemonList.length)]);
      setCurrentNumber(0);
    }
  }, [answerValue]);

  return (
    <div css={styles.play}>
      <PokemonCard pokemonItem={pokemon} />
      <p>prevType: {keyValue}</p>
      <p>Answer: {answerValue}</p>
      <p>miss: {missCounter}</p>
      <p>correct: {correctCounter}</p>
      <p>残り: {time}</p>
    </div>
  );
};

export default PlayTemplate;
