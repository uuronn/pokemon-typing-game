import { css } from '@emotion/react'
import { monster } from './monster'
import Image from 'next/image'
import { useEffect } from 'react'

const input = css`
  border: solid 2px #000;
`


export const PlayTemplate = (): JSX.Element => {
  useEffect(() => {
    addEventListener('keydown', keyPress);
  }, [])
  const keyPress = (e) => {
    const keyCode = e.code;
    console.log(keyCode)
    let keyDown: HTMLElement | null = document.getElementById('keyDown');
    const myCode = String.fromCharCode(keyCode);
    let myCodeLower = myCode.toLowerCase();
    keyDown.innerHTML += myCodeLower;
  }

  return (
    <div>
      <p>あそぶページ</p>
      <Image src={monster[0].imagePath} alt="プリン" width={200} height={200} />
      <p>{monster[0].romaji}</p>
      <div id="keyDown"></div>
      <input css={input} type='text' onKeyPress={(e) => keyPress(e)} />
    </div>
  )
}

export default PlayTemplate
