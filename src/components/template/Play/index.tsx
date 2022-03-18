import { css } from '@emotion/react'
import { monster } from './monster'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const input = css`
  border: solid 1px #000;
`

export const PlayTemplate = (): JSX.Element => {
  const [value, setValue] = useState<string>("")
  const [keyChara, setKeyChara] = useState<string>("")

  const keyDown = (e) => {
    const keyCode = e.code;
    const key = e.key;
    console.log(key)
    console.log(keyCode)
    setValue(prevState => prevState + key)
    console.log(value)
    // let keyDown: HTMLElement | null = document.getElementById('keyDown');
    // const myCode = String.fromCharCode(keyCode);
    // console.log(myCode)
    // let myCodeLower = myCode.toLowerCase();
    // setValue(value += myCodeLower)
    // keyDown.innerHTML += myCodeLower;
  }

  const keyChange = (e) => {
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDown);
    // window.addEventListener('keydown', keyChange);
  }, [])

  return (
    <div>
      <p>タイピングページ</p>
      <Image src={monster[0].imagePath} alt="プリン" width={200} height={200} />
      <p>{monster[0].romaji}</p>
      <input
        css={input}
        type='text'
        value={value}
        onChange={keyChange}
      />
    </div>
  )
}

export default PlayTemplate
