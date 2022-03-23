import { Monster } from "../../template/Play";
import Image from "next/image";

export const MonsterCard = ({ monsterItem }: Monster): JSX.Element => {
  return (
    <>
      <p>fdf</p>
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

export default MonsterCard;
