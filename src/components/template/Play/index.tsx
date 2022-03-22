import { css } from "@emotion/react";
import { monsters } from "./monster";
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
  const [value, setValue] = useState<string>("");
  const [missCounter, setmissCounter] = useState(0);
  const [monster, setMonster] = useState<Monster>();
  const [res, setRes] = useState<Monster[]>();
  const [question, setQuestion] = useState<string[]>([]);
  const [test, setTest] = useState<boolean>(false);

  const keyDown = (e: any) => {
    const code = e.code;
    const key = e.key;

    // if (key !== question) {
    //   console.log(question);
    //   setmissCounter((count) => count + 1);
    //   return;
    // }

    // if (key === question) {
    //   question.splice(0, 1);
    // }

    setValue((val) => val + key);
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    console.log("success");
    setMonster(monsters[Math.floor(Math.random() * monsters.length)]);
  }, []);

  useEffect(() => {
    if (monster) {
      setQuestion(monster.romaji.split(""));
    }
  }, [monster]);

  useEffect(() => {
    if (monster?.romaji === value) {
      const snapshot = monsters.filter(
        (snapshot) => snapshot.romaji !== monster.romaji
      );
      setRes([...snapshot]);
      alert("sucsees");
    }
  }, [value]);

  useEffect(() => {
    if (res) {
      setMonster(res[Math.floor(Math.random() * monsters.length)]);
    }
    setValue("");
  }, [res]);

  const TestButton = () => {
    setTest(true);
    console.log(question);
  };

  return (
    <div>
      <h1>タイピングページ</h1>
      <button onClick={TestButton}>TestButton</button>
      <p>ミスした数: {missCounter}</p>
      <p>問題: {question}</p>
      <p css={typeText}>タイプ文字: {value}</p>
      {monster && <MonsterCard monsterItem={monster} />}
    </div>
  );
};

export default PlayTemplate;
