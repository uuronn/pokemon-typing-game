import { css } from '@emotion/react'
import { Button } from '~/src/components/shared/Button'

const main = css`
  background: gray;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const title = css`
  text-align: center;
`;

const monsterReft = css`
  width: 500px;
  height: 50px;
  background: green;
  position: absolute;
  left: -150px;
  top: 150px;
  transition: 0.3s;

  &:hover {
    transform:rotate(-45deg);
  }
`

const monsterRight = css`
  width: 500px;
  height: 50px;
  background: green;
  top: 150px;
  position: absolute;
  right: -150px;
  transition: 0.3s;

  &:hover {
    transform:rotate(45deg);
  }
`

export const IndexTemplate = (): JSX.Element => {
  return (
    <>
      <main css={main}>
        <h1 css={title}>typing game</h1>
        <div css={monsterReft}></div>
        <div>
          <Button path="/play">遊ぶ(あそぶ)</Button>
          <Button path="/ranking">ランキング</Button>
          <Button path="/setting">設定(せってい)</Button>
        </div>
        <div css={monsterRight}></div>
      </main>
    </>
  )
}
