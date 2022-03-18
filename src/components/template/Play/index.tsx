import { css } from '@emotion/react'
import { monster } from './monster'
import Image from 'next/image'

const input = css`
  border: solid 2px #000;
`


export const PlayTemplate = (): JSX.Element => {
  const keyPress = (e) => {
    console.log(e.key)
  }

  return (
    <div>
      <p>あそぶページ</p>
      <Image src={monster[0].imagePath} alt="プリン" width={200} height={200} />
      <p>{monster[0].romaji}</p>
      <input css={input} type='text' onKeyPress={(e) => keyPress(e)} />
    </div>
  )
}

export default PlayTemplate
