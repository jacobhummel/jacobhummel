import React from "react";
import Image from "next/image";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="w-screen py-16 bg-[#F6F6F6] border-t-2">
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
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contact
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="https://flowbite.com" className="hover:underline">
                  Email
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" className="hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Follow me
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://github.com/themesberg/flowbite"
                  className="hover:underline "
                >
                  GitHub
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://github.com/themesberg/flowbite"
                  className="hover:underline "
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
