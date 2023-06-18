/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Aboutme() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["kijmoshi", "real-kijmoshi", "kijmoshi.xyz", "kijmoshi_dev"],
      startDelay: 150,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 100,
      showCursor: false,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <h1 className={`mt-5 flex flex-col`}>
        <span className={`text-7xl mr-5 flex flex-col`}>Hi, I'm</span>
        <div>
          <span
            className={`text-9xl ml-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-700 font-extrabold`}
            ref={el}
          ></span>
        </div>
      </h1>

      <span className={`text-xl text-center w-full`}>
        I'll write something here
      </span>
    </>
  );
}

export default Aboutme;
