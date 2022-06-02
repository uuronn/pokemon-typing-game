import { css } from "@emotion/react";
import { GoogleIcon } from "~/src/components/shared/icons/GoogleIcon";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "~/src/infra/firebase";
import { doc, setDoc } from "firebase/firestore";

export const LoginContent = ({ ...props }): JSX.Element => {
  const [uid, setUid] = useState<string>("");
  const [name, setName] = useState<string | null>("");
  const provider = new GoogleAuthProvider();

  const signIn = async () => {
    if (!uid) {
      try {
        const res = await signInWithPopup(auth, provider);

        if (!res) throw new Error("res error");

        setUid(res.user.uid);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("ログイン中です");
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
      const uidFun = async () => {
        await setDoc(doc(db, "users", uid), {
          score: 0,
          mode: "default"
        });
      };
      uidFun();
    }
  }, [uid]);

  return (
    <div {...props}>
      <p>自己ベスト: </p>
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
