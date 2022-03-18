import { css } from '@emotion/react'
import Link from 'next/link'
import { ComponentPropsWithRef, ForwardedRef } from 'react'

const button = css`
  display: block;
  width: 200px;
  border: solid 2px #000;
  margin: 0 auto;
  border-radius: 10px;
  text-align: center;
  transition: 0.3s;
  background: #f0f0f0;
  padding: 10px;
  user-select: none;

  &:hover {
    background: green;
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
