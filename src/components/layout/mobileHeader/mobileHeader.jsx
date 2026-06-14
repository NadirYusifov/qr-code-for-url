import React from "react";
import { Link, useHref } from "react-router";

export const MobileHeader = () => {
  const path = useHref();

  return (
    <div className="bg-white flex flex-col lg:hidden absolute top-14 space-y-2 inset-x-0 w-full shadow-lg py-3">
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
  );
};
