import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <nav className={`p-2 pr-3 h-full flex flex-row justify-between`}>

        <Link
          href="/"
          className={`text-white cursor-pointer hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-violet-700`}
        >
          kijmoshi.xyz
        </Link>

        <div className={`flex flex-row space-x-3 sm:hidden`}>
          <Link
            href="/"
            className={`text-white cursor-pointer hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-violet-700`}
          >
            Projects
          </Link>

          <Link
            href="/aboutme"
            className={`text-white cursor-pointer hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-violet-700`}
          >
            About me
          </Link>

          <Link
            href="/contact"
            className={`text-white cursor-pointer hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-violet-700`}
          >
            Contact
          </Link>
        </div>

        <div className={`hidden sm:flex flex-row space-x-3`}>
          <button onClick={() => setIsOpen(!isOpen)}>
            a
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 text-white`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
