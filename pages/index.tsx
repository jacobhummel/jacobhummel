import Image from "next/image";
import Container from "components/Container";

export default function Home() {
  return (
    <Container>
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
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl text-black dark:text-white">
              I&apos;m <strong>Jacob Hummel</strong>, a React/React Native
              front-end software engineer with a UX background. Located in
              Minneapolis, MN.
            </h1>
          </div>
        </div>
      </div>
    </Container>
  );
}
