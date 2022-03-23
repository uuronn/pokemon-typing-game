import { css } from "@emotion/react";
import { monsterList } from "./monsterList";
import { useEffect, useState } from "react";
import { MonsterCard } from "~/src/components/shared/MonsterCard";

const typeText = css`
  font-size: 20px;
  padding: 20px;
  border: solid 1px #000;
  width: 500px;
`;

export interface Monster {
  imagePath: string;
  japanese: string;
  romaji: string;
}

export const PlayTemplate = (): JSX.Element => {
  const [keyValue, setKeyValue] = useState<string>();
  // const [monster, setMonster] = useState<Monster>();
  const [newMonster, setNewMonster] = useState<Monster[]>([]);
  const [monsterName, setMonsterName] = useState<string[]>([]);
  const [missCounter, setMissCounter] = useState<number>(0);
  const [answerValue, setAnswerValue] = useState<string>("");
  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const [test, setTest] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<Monster>();

  const keyDown = (e: KeyboardEvent) => {
    setKeyValue(e.key);
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    console.log(
      "monsterList",
      monsterList[Math.floor(Math.random() * monsterList.length)]
    );

    setPokemon(monsterList[Math.floor(Math.random() * monsterList.length)]);
  }, []);

  useEffect(() => {
    if (pokemon) {
      setMonsterName(pokemon.romaji.split(""));
    }
  }, [pokemon]);

  useEffect(() => {
    if (keyValue !== "" && monsterName[currentNumber] !== keyValue) {
      setMissCounter((val) => val + 1);
      setKeyValue("");
      console.log("aaa");
    }

    if (keyValue && monsterName[currentNumber] === keyValue) {
      console.log("success");
      setCurrentNumber(currentNumber + 1);
      setAnswerValue((val) => val + keyValue);
      setKeyValue("");
    }
  }, [keyValue]);

  useEffect(() => {
    if (pokemon?.romaji === answerValue) {
      const snapshot = monsterList.filter(
        (snapshot) => snapshot.romaji !== pokemon.romaji
      );

      setNewMonster([...snapshot]);
      setCurrentNumber(0);
      alert("sucsees");
    }
  }, [answerValue]);

  useEffect(() => {
    if (newMonster.length > 0) {
      setPokemon(newMonster[Math.floor(Math.random() * monsterList.length)]);
    }
    setAnswerValue("");
  }, [newMonster]);

  const TestButton = () => {
    setTest(!test);
    console.log(test);
  };

  return (
    <div>
      <h1>タイピングページ</h1>
      <button onClick={TestButton}>testButton</button>
      <p>ミスした数: {missCounter}</p>
      <p>問題: {monsterName}</p>
      <p css={typeText}>タイプ文字: {answerValue}</p>
      {pokemon && <MonsterCard monsterItem={pokemon} />}
      {/* <MonsterCard monsterItem={monster} /> */}
    </div>
  );
};

export default PlayTemplate;
