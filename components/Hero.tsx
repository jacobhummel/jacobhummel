import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section id="hero" className="bg-blue-800	w-screen px-8">
        <div className="max-w-screen-lg mx-auto pt-16 sm:pt-32 pb-16">
          <div className="flex flex-col items-center sm:items-start">
            <div className="w-[150px] sm:w-[200px] relative mr-8 mb-8">
              <Image
                alt="Jacob Hummel"
                height={200}
                width={200}
                src="/avatar.jpg"
                className="rounded-full"
              />
            </div>
            <h1 className="text-2xl md:text-3xl text-white">
              👋 I&apos;m{" "}
              <strong className="font-semibold">Jacob Hummel</strong>, a
              software engineer with a UX background.
            </h1>
          </div>
        </div>
      </section>
      <svg
        className="w-screen"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#1D40AF"
          fillOpacity="1"
          d="M0,96L1440,32L1440,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
