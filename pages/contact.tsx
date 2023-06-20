import discord from "@/public/discord.svg";
import github from "@/public/github.png";
import twitter from "@/public/twitter.png";

import Image from "next/image";
import { useRouter } from "next/router";

function Contact() {
  const router = useRouter();
  return (
    <>
      <h1 className={`text-4xl text-center`}>How to contact me</h1>

      <div className={`flex flex-row justify-center mt-20 space-x-6 flex-wrap`}>
        <div
          className={`mt-3 bg-[#5865F2] hover:bg-[#4e5bd9] cursor-pointer w-40 p-1 px-3 flex flex-row items-center rounded`}
          onClick={() => {
            router.push("https://discordapp.com/users/617418260484194413");
          }}
        >
          <Image src={discord} alt="dc" className={`w-10 h-10 mr-3`} />
          @kijmoshi
        </div>
        <div
          className={`mt-3 bg-white hover:bg-[#DCDCDC] text-black cursor-pointer w-fit w-40 p-1 px-3 flex flex-row items-center rounded`}
          onClick={() => {
            router.push("https://github.com/real-kijmoshi");
          }}
        >
          <Image src={github} alt="gh" className={`w-10 h-10 mr-3`} />
          real-kijmoshi
        </div>
        <div
          className={`mt-3 bg-[#1DA1F2] hover:bg-[#1DA1F2] cursor-pointer w-fit w-40 p-1 px-3 flex flex-row items-center rounded`}
          onClick={() => {
            router.push("https://twitter.com/kijmoshi_dev");
          }}
        >
          <Image src={twitter} alt="tt" className={`w-12 h-10 mr-3`} />
          kijmoshi_dev
        </div>
      </div>
    </>
  );
}

export default Contact;
