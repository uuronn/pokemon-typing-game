import { css } from "@emotion/react";
import { pokemonList } from "../Play/pokemonList";
import { Pokemon } from "../Play";
import { useState, useEffect } from "react";

const error = css`
  text-align: center;
`;

export const ErrorPageTemplate = (): JSX.Element => {
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
