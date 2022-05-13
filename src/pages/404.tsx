import type { NextPage } from "next";
import { css } from "@emotion/react";
import { Pokemon } from "./play";
import { useState, useEffect } from "react";
import { pokemonList } from "./play/pokemonList";

const error = css`
  text-align: center;
`;

const custom404Page: NextPage = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    setPokemon(pokemonList[Math.floor(Math.random() * pokemonList.length)]);
  }, []);

  return (
    <div css={error}>
      <h1>404 エラーページ</h1>
      <img src={pokemon?.imagePath} alt={pokemon?.japanese} />
    </div>
  );
};

export default custom404Page;
