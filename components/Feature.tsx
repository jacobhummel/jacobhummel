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
      <section
        id="feature"
        className="text-gray-600 bg-[#F6F6F6] body-font w-screen"
      >
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
                  est vitae erat molestie, ut molestie lacus facilisis. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                  sollicitudin euismod sapien eu convallis. Donec finibus, risus
                  a luctus vulputate, lorem felis varius nibh, feugiat consequat
                  est diam ac massa. Duis sed risus et massa condimentum
                  consectetur id non mi. Vivamus erat nulla, ullamcorper at
                  turpis in, malesuada vestibulum dui.
                </p>
                <Button href="https://boogie.io/blog/better-logbook-for-skydivers/">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
