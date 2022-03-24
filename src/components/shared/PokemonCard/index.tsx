import { Pokemon } from "../../template/Play";
import Image from "next/image";
import { css } from "@emotion/react";
import { ComponentPropsWithRef } from "react";

const pokemonCard = css`
  border: solid 1px #000;
  border-radius: 6px;
  width: 300px;
  height: 300px;
  padding: 0 10px;
  // background: gray;
  list-style: none;
  margin: 0 auto;
`;

const name = css`
  font-size: 28px;
`;

export interface PokemonCardProps extends ComponentPropsWithRef<"li"> {
  pokemonItem: Pokemon;
}

export const PokemonCard = ({ pokemonItem }: PokemonCardProps): JSX.Element => {
  return (
    <li css={pokemonCard}>
      <Image
        src={pokemonItem.imagePath}
        alt={pokemonItem.japanese}
        width={230}
        height={200}
        // objectFit="contain"
      />
      <p css={name}>{pokemonItem.japanese}</p>
      <p css={name}>{pokemonItem.romaji}</p>
    </li>
  );
};

export default PokemonCard;
