import React from "react";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <img src={Logo} alt="Logo" className="w-24 h-auto mb-0" />
        <p className="py-4">&copy; 2024 All Rights Reserved.</p>
        <p className="py-2"> Developed with passion and 💚 by our team.</p>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Navigation</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#00df9a]">
              <HashLink smooth to="/#home">
                Home
              </HashLink>
            </li>
            <li className="py-2 text-sm hover:text-[#00df9a]">
              <HashLink smooth to="/#features">
                Features
              </HashLink>
            </li>
            <li className="py-2 text-sm hover:text-[#00df9a]">
              <HashLink smooth to="/#our-team">
                Our Team
              </HashLink>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Resources</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#00df9a]">
              <a
                href="https://www.flaticon.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flaticon
              </a>
            </li>
            <li className="py-2 text-sm hover:text-[#00df9a]">
              <a
                href="https://storyset.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Storyset
              </a>
            </li>
            <li className="py-2 text-sm hover:text-[#00df9a]">
              <a
                href="https://ai.google.dev/gemini-api/docs/api-key"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gemini API
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Documentation</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#00df9a]">
              <a
                href="https://ai.google.dev/gemini-api/docs/api-key"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
