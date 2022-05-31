import { css } from "@emotion/react";
import { GoogleIcon } from "~/src/components/shared/icons/GoogleIcon";

export const LoginContent = ({ ...props }) => {
  return (
    <button css={button} {...props}>
      <GoogleIcon />
      ログイン
    </button>
  );
};

const button = css`
  padding: 4px;
  display: flex;
  align-items: center;
  border: 2px solid #000;
  border-radius: 10px;
  font-size: 20px;
`;
