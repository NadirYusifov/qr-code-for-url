import React from "react";
import { Link, useHref } from "react-router";

export const MobileHeader = () => {
  const path = useHref();

  return (
    <div className="absolute inset-x-0 top-14 flex w-full flex-col space-y-2 bg-white py-3 shadow-lg lg:hidden">
      <Link
        className={`text-[1.125rem] transition-colors ease-in hover:text-sky-700 ${path === "/" && "text-sky-600"}`}
        to={"/"}
      >
        Home
      </Link>
      <Link
        className={`text-[1.125rem] transition-colors ease-in hover:text-sky-700 ${path === "/about" && "text-sky-600"}`}
        to={"/about"}
      >
        About
      </Link>
      <Link
        className={`text-[1.125rem] transition-colors ease-in hover:text-sky-700 ${path === "/referance" && "text-sky-600"}`}
        to={"/referance"}
      >
        Referance
      </Link>
    </div>
  );
};
