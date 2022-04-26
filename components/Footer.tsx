import React from "react";
import Image from "next/image";
import Obfuscate from "react-obfuscate";
import Link from "./Link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="w-screen p-16 bg-[#F6F6F6] border-t-2">
      <div className="md:flex md:justify-between max-w-screen-lg mx-auto">
        <div className="mb-6 md:mb-0">
          <span className="flex items-center">
            <Image
              alt="Jacob Hummel"
              height={50}
              width={50}
              src="/avatar.jpg"
              className="rounded-full h-8"
            />
            <span className="self-center ml-4 text-2xl font-semibold whitespace-nowrap dark:text-white">
              Jacob Hummel
            </span>
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contact
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Obfuscate
                  className="hover:underline"
                  email="j4cobhummel@gmail.com"
                />
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/jacobhummel/"
                  className="hover:underline"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Follow me
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link
                  href="https://github.com/jacobhummel"
                  className="hover:underline "
                >
                  GitHub
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://twitter.com/jakehummel"
                  className="hover:underline "
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
