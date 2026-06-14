import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="w-full bg-sky-700 text-center text-white">
      <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 py-10">
        <ul>
          <li className="text-xl font-medium"> Social media</li>
          <ul>
            <li>
              <a
                className="text-[1.125rem] underline underline-offset-5 hover:text-white/70 transition-colors ease-in"
                href="https://github.com/NadirYusifov"
              >
                GitHub
              </a>
            </li>
          </ul>
        </ul>

        <div>
          <ul className="mt-8 lg:mt-0">
            <li className="text-xl font-medium">Pages</li>
            <ul>
              <li className="flex flex-col space-y-2">
                <Link
                  className="text-[1.125rem] underline underline-offset-5 hover:text-white/70 transition-colors ease-in"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="text-[1.125rem] underline underline-offset-5 hover:text-white/70 transition-colors ease-in"
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className="text-[1.125rem] underline underline-offset-5 hover:text-white/70 transition-colors ease-in"
                  to="/referance"
                >
                  Referance
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </footer>
  );
};
