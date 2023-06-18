import { Roboto_Serif } from "next/font/google";
import Link from "next/link";

const roboto = Roboto_Serif({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

function Navbar() {
  const redirectTo = () => {
    console.log("r");
  };

  return (
    <nav className={`flex justify-between px-5 py-2 ${roboto.className}`}>
      <Link
        className={`cursor-pointer hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pink-400 to-violet-700`}
        href="/"
      >
        kijmoshi
      </Link>

      <div className={"flex justify-between space-x-10"}>
        <Link
          className={`cursor-pointer hover:bg-clip-text  hover:text-transparent hover:bg-gradient-to-r from-pink-400 to-violet-700`}
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className={`cursor-pointer hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pink-400 to-violet-700`}
          href="/aboutme"
        >
          About me
        </Link>
        <Link
          className={`cursor-pointer hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pink-400 to-violet-700`}
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
