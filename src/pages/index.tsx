import type { NextPage } from "next";
import { css } from "@emotion/react";
import { Button } from "~/src/components/shared/Button";
import { useEffect, useState } from "react";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../infra/firebase";
import { LoginContent } from "../components/domain/auth/LoginContent";

export const Home: NextPage = (): JSX.Element => {
  const [img, setImg] = useState<string>();

  useEffect(() => {
    const pokemon = async () => {
      const querySnapshot = await getDocs(collection(db, "pokemon"));
      setImg(
        querySnapshot.docs[
          Math.floor(Math.random() * querySnapshot.docs.length)
        ].data().image
      );
      // console.log(
      //   querySnapshot.docs[
      //     Math.floor(Math.random() * querySnapshot.docs.length)
      //   ].data().image
      // );
      // querySnapshot.forEach((doc) => {
      //   console.log(typeof doc.data());
      //   const pokemon: object[] = doc.
      //   // doc.data() is never undefined for query doc snapshots
      //   // console.log(doc.id, " => ", doc.data());
      // });
    };
    pokemon();
  }, []);

  // useEffect(() => {}, [img]);

  return (
    <main css={main}>
      <h1 css={title}>typing game</h1>
      <div css={monsterReft}>
        <img src={img} />
      </div>
      <div>
        <Button path="/play">遊ぶ(あそぶ)</Button>
        <Button path="/ranking">ランキング</Button>
        <Button path="/setting">設定(せってい)</Button>
      </div>
      {/* <img src={img?.url} alt="" /> */}
      {/* <img src={img} /> */}
      <LoginContent css={loginContent} />
      <div css={monsterRight}>
        <img src={img} />
      </div>
    </main>
  );
};

export default Home;

const main = css`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const title = css`
  text-align: center;
`;

const monsterReft = css`
  width: 500px;
  height: 50px;
  background: green;
  position: absolute;
  left: -150px;
  top: 150px;
  transition: 0.3s;

  &:hover {
    transform: rotate(45deg);
  }
`;

const monsterRight = css`
  width: 500px;
  height: 50px;
  background: green;
  top: 150px;
  position: absolute;
  right: -150px;
  transition: 0.3s;

  &:hover {
    transform: rotate(-45deg);
  }
`;

const loginContent = css`
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 100;
`;
