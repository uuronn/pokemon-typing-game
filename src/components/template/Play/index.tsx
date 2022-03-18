import { css } from '@emotion/react'
import { monster } from './monster'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const typeText = css`
  font-size: 20px;
  padding: 20px;
  border: solid 1px #000;
  width: 500px;
`;

export const PlayTemplate = (): JSX.Element => {
  const [value, setValue] = useState<string>("")
  console.log(monster[0].romaji.toLowerCase())
  
  console.log(value.toLowerCase())
  const keyDown = (e) => {
    if(e.code === "Backspace") {
      // console.log("delete")
      setValue(prevState => prevState + key)
      // str.indexOf( 検索したい文字, 検索開始位置 );
      return
    }

    // if(e.code === value.indexOf(monster[0].romaji.indexOf()))
    
    const code = e.code;
    const key = e.key;
    // console.log(code)
    // console.log(key)
    setValue(prevState => prevState + key)
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDown);
  }, [])

  useEffect(() => {
    // console.log(value.length)
    if(monster[0].romaji === value) {
      alert("sucsees")
      setValue("")
    }
  }, [value])

  return (
    <div>
      <p>タイピングページ</p>
      <Image src={monster[0].imagePath} alt="プリン" width={200} height={200} />
      <p>{monster[0].japanese}</p>
      <p>{monster[0].romaji}</p>
      <p css={typeText}>タイプ文字: {value}</p>
    </div>
  )
}

export default PlayTemplate
