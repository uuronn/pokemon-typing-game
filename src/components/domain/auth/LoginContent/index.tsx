import { css } from "@emotion/react";
import { GoogleIcon } from "~/src/components/shared/icons/GoogleIcon";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { auth } from "~/src/infra/firebase";

export const LoginContent = ({ ...props }): JSX.Element => {
  const [uid, setUid] = useState<string>("");
  const provider = new GoogleAuthProvider();

  const signIn = async () => {
    try {
      const res = await signInWithPopup(auth, provider);

      if (!res) throw new Error("res取れてないよ");

      setUid(res.user.uid);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <p>login: ${uid}</p>
      <button onClick={signIn} css={button} {...props}>
        <GoogleIcon />
        ログイン
      </button>
    </>
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
