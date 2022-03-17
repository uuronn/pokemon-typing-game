import { css } from '@emotion/react'
import Link from 'next/link'
import { ComponentPropsWithRef, ForwardedRef } from 'react'

// const a = css`
//   background: green;
//   &:after {
//     content: "";
//     width: 200px;
//     height: 200px;
//     display: block;
//     background: red;
//   }
// `;

const button = css`
  border: solid 1px #f0f0f0;
  width: 300px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  background: gray;
  margin: 0 auto;
`;

export const Button = ({
  children,
  path,
}): JSX.Element => {

  return (
    <Link href={path}>
      <a>
        <div css={button}>

        {children}
        </div>
      </a>
    </Link>
  )
}

// export interface ButtonProps extends ComponentPropsWithRef<"Link"> {
//   forwardRef?: ForwardedRef<HTMLLinkElement>;
//   path: string;
// }

// export const Button = ({
//   forwardRef,
//   children,
//   path,
//   ...props
// }: ButtonProps): JSX.Element => {

//   return (
//     <Link href={path} ref={forwardRef} {...props}>
//       <a>
//         {children}
//       </a>
//     </Link>
//   )
// }
