
import React from "react";
import logo from "../assets/Rick-and-Morty-Logo.jpeg";

const Nav = () => {
  return (
    <section>
      <nav className="bg-black h-[80px] flex justify-between items-center">
        <a href="/">
          <img src={logo} alt="logo" className="h-[80px]" />
        </a>
        <ul className="flex gap-20 mx-5">
          <li>
            <a
              href="https://rickandmortyapi.com/"
              rel="noreferrer"
              target="_blank"
              className="text-[#00AFC8] text-3xl hover:text-[#60C04C] "
            >
              API
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Rick_and_Morty"
              rel="noreferrer"
              target="_blank"
              className="text-[#00AFC8] text-3xl hover:text-[#60C04C]"
            >
              Wiki
            </a>
          </li>
          <li>
            <a
              href="https://github.com/your-username/your-repo"
              rel="noreferrer"
              target="_blank"
              className="text-[#00AFC8] text-3xl hover:text-[#60C04C]"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Nav;
