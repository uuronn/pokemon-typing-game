import { css } from '@emotion/react'
import Link from 'next/link'
import { ComponentPropsWithRef, ForwardedRef } from 'react'

const button = css`
  border: solid 1px #f0f0f0;
  width: 300px;
  background: red;
`;

export const Button = ({
  children,
  path,
  ...props
}): JSX.Element => {

  return (
    <Link css={button} href={path} {...props}>
      <a>
        {children}
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
