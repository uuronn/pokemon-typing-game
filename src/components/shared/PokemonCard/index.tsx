import { Pokemon } from "~/src/pages/play";
import { ComponentPropsWithRef } from "react";
import * as styles from "./styles";

export interface PokemonCardProps extends ComponentPropsWithRef<"div"> {
  pokemonItem?: Pokemon;
}

export const PokemonCard = ({ pokemonItem }: PokemonCardProps): JSX.Element => {
  return (
    <div css={styles.pokemonCard}>
      <img
        src={pokemonItem?.imagePath}
        alt={pokemonItem?.japanese}
        width={230}
        height={200}
      />
      <p css={styles.name}>{pokemonItem?.japanese}</p>
      <p css={styles.name}>{pokemonItem?.romaji}</p>
      <audio controls src={pokemonItem?.voice}></audio>
    </div>
  );
};
