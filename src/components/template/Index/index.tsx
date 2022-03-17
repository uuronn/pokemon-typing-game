import { css } from '@emotion/react'
import { Button } from '~/src/components/shared/Button'

const main = css`
  background: #f0f0f0;
`

const title = css`
  text-align: center;
`

export const IndexTemplate = (): JSX.Element => {
  return (
    <>
      <main css={main}>
        <h1 css={title}>typing game</h1>
        <div>
          <Button path="/play">遊ぶ(あそぶ)</Button>
          <Button path="/ranking">ランキング</Button>
          <Button path="/setting">設定(せってい)</Button>
        </div>
      </main>
    </>
  )
}
