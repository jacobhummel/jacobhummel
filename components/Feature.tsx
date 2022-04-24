import React from "react";
import Image from "next/image";
import Link from "./Link";
import Button from "./Button";

type Props = {};

export default function Feature({}: Props) {
  return (
    <>
      <svg
        className="w-screen"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#F6F6F6"
          fillOpacity="1"
          className="w-screen"
          d="M0,224L24,218.7C48,213,96,203,144,202.7C192,203,240,213,288,234.7C336,256,384,288,432,266.7C480,245,528,171,576,144C624,117,672,139,720,160C768,181,816,203,864,197.3C912,192,960,160,1008,160C1056,160,1104,192,1152,213.3C1200,235,1248,245,1296,250.7C1344,256,1392,256,1416,256L1440,256L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
      <section className="text-gray-600 bg-[#F6F6F6] body-font w-screen">
        <div className="container px-5 py-16 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg overflow-hidden">
              <Image
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/static/images/features/boogie-blog.jpg"
                width={1024}
                height={512}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image
                    alt="content"
                    className="w-10 h-10 rounded-full"
                    src="/static/images/experience/boogie.png"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Boogie
                  </h2>
                  <div className="w-12 h-1 bg-blue-600 rounded mt-2 mb-4"></div>
                  <p className="text-base">Skydiving Logbook app</p>
                  <Link href="https://boogie.io">boogie.io</Link>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas non dictum metus. Fusce mollis varius ligula.
                  Phasellus volutpat, orci eu ornare imperdiet, dui quam
                  tincidunt odio, ac pharetra enim sem ut enim. Fusce gravida
                  est vitae erat molestie, ut molestie lacus facilisis.
                  Phasellus volutpat, orci eu ornare imperdiet, dui quam
                  tincidunt odio, ac pharetra enim sem ut enim. Fusce gravida
                  est vitae erat molestie, ut molestie lacus facilisis.
                </p>
                <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                  <button className="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-slate-200 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 512 512"
                    >
                      <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                    </svg>
                    <span className="ml-4 flex items-start flex-col leading-none">
                      <span className="text-xs text-gray-600 mb-1">
                        GET IT ON
                      </span>
                      <span className="title-font font-medium">
                        Google Play
                      </span>
                    </span>
                  </button>
                  <button className="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-slate-200 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 305 305"
                    >
                      <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                      <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                    </svg>
                    <span className="ml-4 flex items-start flex-col leading-none">
                      <span className="text-xs text-gray-600 mb-1">
                        Download on the
                      </span>
                      <span className="title-font font-medium">App Store</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}