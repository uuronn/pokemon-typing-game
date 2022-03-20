import { MonsterCardProps } from "../../template/Play"
import Image from "next/image"

export const MonsterCard = ({
  monsterItem
}: MonsterCardProps): JSX.Element => {
  return (
    <>
      <Image src={monsterItem.imagePath} alt={monsterItem.japanese} width={200} height={200} />
      <p>{monsterItem.japanese}</p>
      <p>{monsterItem.romaji}</p>
    </>
  )
}

export default MonsterCard
