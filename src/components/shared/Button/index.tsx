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
width: 200px;
  padding: 10px;
  border: solid 1px #000;
  border-radius: 16px;
  text-align: center;
  transition: 0.3s;
  text-decoration: none;
  cursor: pointer;
  background: red;


  &:hover {
    // background: green;
  }
`;

export interface ButtonProps extends ComponentPropsWithRef<"a"> {
  forwardRef?: ForwardedRef<HTMLAnchorElement>;
  path: string;
}

export const Button = ({
  forwardRef,
  children,
  path,
  ...props
}: ButtonProps): JSX.Element => {

  return (
    <Link href={path}>
      <a
        css={button}
        ref={forwardRef}
        {...props}
      >
        
        {children}
      </a>
    </Link>
  )
}

export default Button;
