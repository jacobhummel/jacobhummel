import { experience } from "data/experience";
import Image from "next/image";
import Link from "./Link";

export default function Experience() {
  return (
    <section id="experience" className="w-screen px-2 sm:px-8">
      <div className="max-w-screen-lg mx-auto px-8 sm:-mt-24 lg:-mt-32">
        <h1 className="text-2xl md:text-3xl text-black pb-8 text-center">
          Experience
        </h1>
        <ol className="relative border-l pl-6 border-gray-200 dark:border-gray-700">
          {experience.map((item) => (
            <li key={item.name} className="mb-10 ml-6">
              <span className="flex absolute -left-4 justify-center items-center w-8 h-8">
                <Image
                  src={item.icon}
                  width={32}
                  height={32}
                  alt={`${item.name} logo`}
                  className="rounded-full"
                />
              </span>
              <h3 className="flex flex-col sm:flex-row sm:items-center mb-1 text-lg text-gray-900">
                <span className="font-semibold mr-1">{item.title}</span>
                <Link href={item.link}>at {item.name}</Link>
                {item.active && (
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 my-2 sm:ml-3 rounded max-w-[80px]">
                    Current
                  </span>
                )}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.duration}
              </time>
              {item.description && (
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              )}
              {item.bullets && (
                <ol className="list-disc list-inside text-gray-500 mt-4">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="mt-1 text-sm list-item">
                      {bullet}
                    </li>
                  ))}
                </ol>
              )}
              {item.skills && (
                <ol className="list-disc list-inside text-gray-500 mt-4">
                  {item.skills.map((skill) => (
                    <Link
                      href={skill.link}
                      className="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm mr-1 align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
                    >
                      {skill.name}
                    </Link>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
