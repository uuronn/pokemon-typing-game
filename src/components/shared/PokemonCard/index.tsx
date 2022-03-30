import { Pokemon } from "../../template/Play";
import Image from "next/image";
import { ComponentPropsWithRef } from "react";
import * as styles from "./styles";

export interface PokemonCardProps extends ComponentPropsWithRef<"div"> {
  pokemonItem: Pokemon;
  answerValue: string;
}

export const PokemonCard = ({
  pokemonItem,
  answerValue
}: PokemonCardProps): JSX.Element => {
  if (answerValue === pokemonItem?.romaji) {
    alert("sucsees");
  }

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
    </div>
  );
};

export default PokemonCard;
