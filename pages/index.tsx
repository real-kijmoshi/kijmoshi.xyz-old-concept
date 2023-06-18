/* eslint-disable react/no-unescaped-entities */
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const titleRoboto = Roboto({
  weight: "900",
  subsets: ["latin"],
  style: "italic",
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 pt-0 ${roboto.className}`}
    >
      <h1
        className={`ta-center mt-5 text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-700 font-extrabold`}
      >
        kijmoshi.xyz
      </h1>
      <p>Hi, I'm kijmoshi</p>
    </main>
  );
}
