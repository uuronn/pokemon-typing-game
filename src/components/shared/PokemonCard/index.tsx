import { Pokemon } from "../../template/Play";
import Image from "next/image";

export const PokemonCard = ({ monsterItem }: Pokemon): JSX.Element => {
  return (
    <>
      <Image
        src={monsterItem.imagePath}
        alt={monsterItem.japanese}
        width={200}
        height={200}
      />
      <p>{monsterItem.japanese}</p>
      <p>{monsterItem.romaji}</p>
    </>
  );
};

export default PokemonCard;
