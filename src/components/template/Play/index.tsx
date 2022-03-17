import { css } from '@emotion/react'
import { monster } from './monster'
import Image from 'next/image'

export const PlayTemplate = (): JSX.Element => {
  console.log(monster[0].imagePath)
  return (
    <div>
      <p>あそぶページ</p>
      <Image src={monster[0].imagePath} alt="プリン" width={200} height={200} />
      <p>{monster[0].romaji}</p>
    </div>
  )
}

export default PlayTemplate
