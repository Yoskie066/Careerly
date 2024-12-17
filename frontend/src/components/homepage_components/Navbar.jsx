import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white z-[100] relative">
      <img src={Logo} alt="Logo" className="w-24 h-auto mb-0" />
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-[#00df9a]">
          <HashLink smooth to="/#home">
            Home
          </HashLink>
        </li>
        <li className="p-4 hover:text-[#00df9a]">
          <HashLink smooth to="/#features">
            Features
          </HashLink>
        </li>
        <li className="p-4 whitespace-nowrap hover:text-[#00df9a]">
          <HashLink smooth to="/#our-team">
            Our Team
          </HashLink>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <img src={Logo} alt="Logo" className="w-24 h-auto mb-0" />
        <li className="p-4 border-b border-gray-600">
          <HashLink smooth to="/#home" onClick={handleNav}>
            Home
          </HashLink>
        </li>
        <li className="p-4 border-b border-gray-600">
          <HashLink smooth to="/#features" onClick={handleNav}>
            Features
          </HashLink>
        </li>
        <li className="p-4">
          <HashLink smooth to="/#our-team" onClick={handleNav}>
            Our Team
          </HashLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
