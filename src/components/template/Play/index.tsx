import { css } from '@emotion/react'
import { monster } from './monster'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MonsterCard } from '~/src/components/shared/MonsterCard'

const typeText = css`
  font-size: 20px;
  padding: 20px;
  border: solid 1px #000;
  width: 500px;
`;

export interface MonsterCardProps {
  imagePath: any
  japanese: string
  romaji: string
}
  
export const PlayTemplate = (): JSX.Element => {
  const [value, setValue] = useState<string>("")
  const [monsterList, setMonsterList] = useState(monster)
  const [missCounter, setmissCounter] = useState(0)
  let question = monster[0].romaji.split("")

  const keyDown = (e: any) => {
    const code = e.code;
    const key = e.key;

    if(key !== question[0]) {
      setmissCounter(count => count + 1)
      return;
    }

    if(key === question[0]) {
      question.splice(0, 1)
    }

    setValue(val => val + key)
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDown);
  }, [])

  useEffect(() => {
    if(monsterList[0].romaji === value) {
      alert("sucsees")
      setValue("")
    }
  }, [value])

  return (
    <div>
      <h1>タイピングページ</h1>
      {/* <Image src={monster[0].imagePath} alt="プリン" width={200} height={200} />
      <p>{monster[0].japanese}</p> */}
      {/* <p>{monster[0].romaji}</p> */}
      <p>ミスした数: {missCounter}</p>
      <p>問題: {question}</p>
      <p css={typeText}>タイプ文字: {value}</p>
      <ul>
         {monsterList.map((monsterItem: MonsterCardProps, i: number) => {
          return (
            <li key={i}>
              <MonsterCard monsterItem={monsterItem} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PlayTemplate
