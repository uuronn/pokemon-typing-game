import { css } from "@emotion/react";
import { GoogleIcon } from "~/src/components/shared/icons/GoogleIcon";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "~/src/infra/firebase";

export const LoginContent = ({ ...props }): JSX.Element => {
  const [uid, setUid] = useState<string>("");
  const [name, setName] = useState<string | null>("");
  const provider = new GoogleAuthProvider();

  const signIn = async () => {
    try {
      const res = await signInWithPopup(auth, provider);

      if (!res) throw new Error("res error");

      setUid(res.user.uid);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.displayName);
        setUid(user.uid);
      } else {
        console.log("ログインされていません");
      }
    });
  }, []);

  useEffect(() => {
    if (uid) {
      console.log(uid);
    }
  }, [uid]);

  return (
    <div {...props}>
      <button onClick={signIn} css={button}>
        <GoogleIcon />
        ログイン
      </button>
      <p>ユーザー名: {name}</p>
      <p>login: ${uid}</p>
    </div>
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
