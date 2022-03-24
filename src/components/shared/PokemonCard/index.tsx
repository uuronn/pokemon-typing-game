import { Pokemon } from "../../template/Play";
import Image from "next/image";
import { ComponentPropsWithRef, useState } from "react";
import * as styles from "./styles";

export interface PokemonCardProps extends ComponentPropsWithRef<"li"> {
  pokemonItem: Pokemon;
}

export const PokemonCard = ({ pokemonItem }: PokemonCardProps): JSX.Element => {
  const [test, setTest] = useState<boolean>(false);

  return (
    <li css={styles.pokemonCard}>
      <Image
        src={pokemonItem.imagePath}
        alt={pokemonItem.japanese}
        width={230}
        height={200}
      />
      <p css={styles.name}>{pokemonItem.japanese}</p>
      <p css={styles.name}>{pokemonItem.romaji}</p>
    </li>
  );
};

export default PokemonCard;
