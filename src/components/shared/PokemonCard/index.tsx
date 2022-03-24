import { Pokemon } from "../../template/Play";
import Image from "next/image";
import { ComponentPropsWithRef } from "react";
import * as styles from "./styles";

export interface PokemonCardProps extends ComponentPropsWithRef<"li"> {
  pokemonItem: Pokemon;
}

export const PokemonCard = ({ pokemonItem }: PokemonCardProps): JSX.Element => {
  return (
    <>
      <Image
        src={pokemonItem.imagePath}
        alt={pokemonItem.japanese}
        width={230}
        height={200}
      />
      <p css={styles.name}>{pokemonItem.japanese}</p>
      <p css={styles.name}>{pokemonItem.romaji}</p>
    </>
  );
};

export default PokemonCard;
