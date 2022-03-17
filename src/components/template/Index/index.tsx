import { css } from '@emotion/react'
import { Button } from '~/components/shared/Button'

const test = css`
  // background: red;
`

export const IndexTemplate = (): JSX.Element => {
  return (
    <>
      <main>
        <h1>typing game</h1>
        <div css={test}>
          <Button path="/play">遊ぶ(あそぶ)</Button>
          <Button path="/ranking">ランキング</Button>
          <Button path="/setting">設定(せってい)</Button>
        </div>
      </main>
    </>
  )
}
