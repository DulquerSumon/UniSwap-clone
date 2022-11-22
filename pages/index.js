import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";

import styles from "../styles/Home.module.css";

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
};

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Head>
        <title>UniSwap</title>
        <meta name="description" content="uniswap" />
      </Head>
      <Header />
      <Main />
    </div>
  );
}
