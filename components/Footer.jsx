import Image from "next/image";
import logo from "@/assets/images/logo.avif";
import { FaSignInAlt, FaSignOutAlt, FaUser, FcDribbble } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const Company = "Bukin-app";
  return (
    <>
      <footer className="bg-primary dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <Image
                src={logo}
                alt="#"
                className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-300"
              />
              <ul className="text-gray-300 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-gray-300">
                Help center
              </h2>
              <ul className="text-gray-300 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-gray-300">
                Download
              </h2>
              <ul className="text-gray-300 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    iOS
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Android
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Windows
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    MacOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 bg-secondary dark:bg-secondary md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-300 dark:text-gray-300 sm:text-center">
              © {currentYear} <a href="#">{Company}</a>. All Rights Reserved.
            </span>
            
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
