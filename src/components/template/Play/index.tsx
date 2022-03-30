import { css } from "@emotion/react";
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
  // const [newPokemon, setNewPokemon] = useState<Pokemon[]>([]);
  // const [pokemonName, setPokemonName] = useState<string[]>([]);
  // const [missCounter, setMissCounter] = useState<number>(0);
  // const [currentNumber, setCurrentNumber] = useState<number>(0);
  // const [test, setTest] = useState<boolean>(false);

  const keyDown = (e: KeyboardEvent) => {
    setKeyValue(e.key);
  };

  useEffect(() => {
    if (keyValue) {
      setAnswerValue((val) => val + keyValue);
    }
  }, [keyValue]);

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    setPokemon(pokemonList[Math.floor(Math.random() * pokemonList.length)]);
    // console.log(pokemon);
  }, []);

  useEffect(() => {
    if (pokemon) {
      console.log("aaa", pokemon);
    }
    // if (pokemon) {
    //   setPokemonName(pokemon.romaji.split(""));
    // }
  }, [pokemon]);

  // useEffect(() => {
  //   // if (keyValue !== "" && pokemonName[currentNumber] !== keyValue) {
  //   //   setMissCounter((val) => val + 1);
  //   //   setKeyValue("");
  //   // }

  //   if (keyValue && pokemonName[currentNumber] === keyValue) {
  //     setCurrentNumber(currentNumber + 1);
  //     setAnswerValue((val) => val + keyValue);
  //     setKeyValue("");
  //   }
  // }, [keyValue]);

  // useEffect(() => {
  //   if (pokemon?.romaji === answerValue) {
  //     const snapshot = pokemonList.filter(
  //       (snapshot) => snapshot.romaji !== pokemon.romaji
  //     );

  //     setNewPokemon([...snapshot]);
  //     setCurrentNumber(0);
  //     alert("sucsees");
  //   }
  // }, [answerValue]);

  // useEffect(() => {
  //   if (newPokemon.length > 0) {
  //     setPokemon(newPokemon[Math.floor(Math.random() * pokemonList.length)]);
  //   } else {
  //     // alert("終了です");
  //   }
  //   setAnswerValue("");
  // }, [newPokemon]);

  // const TestButton = () => {
  //   setTest(!test);
  //   console.log(pokemon);
  // };

  return (
    <div css={styles.play}>
      <p>prevType: {keyValue}</p>
      <p>Answer: {answerValue}</p>
      <PokemonCard pokemonItem={pokemon} answerValue={answerValue} />
      {/* <h1>タイピングページ</h1>
      <button onClick={TestButton}>testButton</button>
      <p>ミスした数: {missCounter}</p>
      <p>問題: {pokemonName}</p>
      <p css={styles.typeText}>タイプ文字: {answerValue}</p>
      <p>{keyValue}</p> */}
      {/* {pokemon && (
        <PokemonCard css={styles.pokemonCard} PokemonItem={pokemon} />
      )} */}
      {/* {pokemonList.map((pokemonItem, i) => {
        return <PokemonCard key={i} pokemonItem={pokemonItem} />;
      })} */}
    </div>
  );
};

export default PlayTemplate;
