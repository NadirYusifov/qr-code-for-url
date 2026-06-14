import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router";
import { useHref } from "react-router";
import Logo from "/logo.png";
import { MobileHeader } from "../mobileHeader/mobileHeader";

export const Header = () => {
  const path = useHref();
  const [menu, setMenu] = useState(false);

  return (
    <header className="w-full h-15 border border-gray-200 shadow-lg content-center">
      <nav className="text-center flex justify-between container mx-auto px-4">
        <picture>
          <Link to={"/"}>
            <img
              width={30}
              height={30}
              quality={100}
              loading="lazy"
              alt="QR Code Generate logo"
              src={Logo}
            />
          </Link>
        </picture>
        <div className="hidden lg:block space-x-0 lg:space-x-8">
          <Link
            className={`text-[1.125rem] hover:text-sky-700 transition-colors ease-in ${path === "/" && "text-sky-600"}`}
            to={"/"}
          >
            Home
          </Link>
          <Link
            className={`text-[1.125rem] hover:text-sky-700 transition-colors ease-in ${path === "/about" && "text-sky-600"}`}
            to={"/about"}
          >
            About
          </Link>
          <Link
            className={`text-[1.125rem] hover:text-sky-700 transition-colors ease-in ${path === "/referance" && "text-sky-600"}`}
            to={"/referance"}
          >
            Referance
          </Link>
        </div>
        {!menu && <MobileHeader />}
        <button className="block lg:hidden" onClick={() => setMenu(!menu)}>
          <Menu />
        </button>
      </nav>
    </header>
  );
};
