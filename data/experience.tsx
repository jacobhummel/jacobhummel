import Link from "components/Link";
import { skills } from "./skills";

export const experience = [
  {
    name: "Revel Transit",
    title: "Staff Software Engineer",
    duration: "MAY 2024 - PRESENT",
    active: true,
    icon: "/static/images/experience/revel.jpeg",
    link: "https://gorevel.com/",
    description: (
      <>
        Leading frontend engineering practice, optimizing system health and
        strategy, hiring, and mentoring engineers. Implemented CI/CD, automated
        testing, DataDog RUM for observability, and automated dependency
        upgrades to enhance development workflows. Continue to lead development
        and maintenance of Revel&apos;s driver and internal web applications.
      </>
    ),
    skills: [
      skills.React,
      skills.ReactNative,
      skills.TypeScript,
      skills.Expo,
      skills.NextJS,
      skills.ApolloGraphQl,
      skills.Python,
      skills.Django,
    ],
  },
  {
    name: "Revel Transit",
    title: "Senior Software Engineer",
    duration: "JUNE 2022 - MAY 2024",
    active: false,
    icon: "/static/images/experience/revel.jpeg",
    link: "https://gorevel.com/",
    description: (
      <>
        Spearheaded the Revel Driver app development (React Native + Expo) from
        inception to scale, deployed on App Store, Google Play, and web, used by
        6,000+ NYC TLC drivers for 5M+ rides. Also developed internal web apps
        (React, Next.js) for operations, managing driver and rental business.
      </>
    ),
    skills: [
      skills.React,
      skills.ReactNative,
      skills.TypeScript,
      skills.Expo,
      skills.NextJS,
      skills.ApolloGraphQl,
      skills.Python,
      skills.Django,
    ],
  },
  {
    name: "Target – Apply for RedCard",
    title: "Sr. Software Engineer",
    duration: "APR 2021 - JUNE 2022",
    active: false,
    icon: "/static/images/experience/target.jpg",
    link: "https://www.target.com",
    description: (
      <>
        Rewrote{" "}
        <Link href="https://target.com/redcard" className="underline">
          target.com/redcard
        </Link>{" "}
        micro-frontend (React, TypeScript, Next.js, React Query). Developed
        resilient Electron app for in-store RedCard payments (React, TypeScript,
        React Query). Implemented Jest, React Testing Library, and Cypress with
        Vela CI/CD.
      </>
    ),
    skills: [
      skills.React,
      skills.TypeScript,
      skills.NextJS,
      skills.Electron,
      skills.Cypress,
      skills.StyledComponents,
    ],
  },
  {
    name: "Target – LaunchPad",
    title: "Sr. Software Engineer",
    duration: "SEPT 2018 - APR 2021",
    active: false,
    icon: "/static/images/experience/target.jpg",
    link: "https://www.target.com",
    description: (
      <>
        Built vendor web app for retail data management (React, Redux,
        TypeScript, Apollo, NodeJS). Automated testing with Jest, React Testing
        Library, Cypress, and Drone CI/CD. <br />
        <br />
        Check out{" "}
        <Link
          href="https://www.youtube.com/watch?v=mIejhIX7ObE"
          className="underline"
        >
          this talk
        </Link>{" "}
        my co-worker gave about the app!
      </>
    ),
    skills: [
      skills.React,
      skills.TypeScript,
      skills.ApolloGraphQl,
      skills.MongoDB,
      skills.MaterialUI,
      skills.Cypress,
    ],
  },
  {
    name: "Target – Enterprise Collaboration",
    title: "Software Engineer",
    duration: "MAR 2017 - OCT 2018",
    active: false,
    icon: "/static/images/experience/target.jpg",
    link: "https://www.target.com",
    description:
      "Built company intranet homepage used as landing page by all corporate employees. Established web development standards for building custom React components / custom sites in Office 365 using the SharePoint Framework. Built website for requesting and automatically provisioning team sites using company data classification rules.",
    skills: [
      skills.React,
      skills.TypeScript,
      skills.Office365,
      skills.SharePoint,
      skills.AzureFunctions,
      skills.PowerShell,
    ],
  },
  // {
  //   name: "Boogie",
  //   title: "Software Engineer / Co-founder",
  //   duration: "AUG 2014 - PRESENT",
  //   active: true,
  //   icon: "/static/images/experience/boogie.png",
  //   link: "https://boogie.io",
  //   description:
  //     "Develop a React Native skydiving logbook app used by thousands of skydivers around the world. App enables users to record their skydives using their phone's altimeter or manually. Collaborate remotely with developers and a designer. Launched the first version in native Android in 2014. Re-wrote for iOS and Android using React Native in 2017.",
  //   skills: [
  //     skills.React,
  //     skills.TypeScript,
  //     skills.ReactNative,
  //     skills.Expo,
  //     skills.AWS,
  //     skills.Python,
  //     skills.Django,
  //   ],
  // },
  {
    name: "Visual Logic",
    title: "UX Developer",
    duration: "JAN 2014 - MAR 2017",
    active: false,
    icon: "/static/images/experience/vlg.png",
    link: "https://vlgux.com",
    description:
      "Develop web and mobile apps in collaboration with UX Designers and clients. Apps vary from prototype to production level. Responsible for all aspects of development including frontend, backend, database, and server. Communicate development constraints to shape product designs.",
    skills: [
      skills.JavaScript,
      skills.Jekyll,
      skills.AngularJS,
      skills.jQuery,
      skills.CSS3,
      skills.HTML5,
      skills.Android,
    ],
  },
  {
    name: "Thomson Reuters",
    title: "Technology Intern",
    duration: "SUMMER 2013",
    active: false,
    icon: "/static/images/experience/thomson-reuters.jpg",
    link: "https://www.thomsonreuters.com/en.html",
    description:
      "Full-Stack web developer using the Spring MVC Framework. Added features and improvements to an internal business application.",
  },
  {
    name: "Emerson Fisher",
    title: "Web Development Intern",
    duration: "SUMMER 2012",
    active: false,
    icon: "/static/images/experience/emerson.jpg",
    link: "http://www.emerson.com/en-us/automation/fisher",
    description:
      "Full-Stack web developer using ASP.NET Web Forms. Rewrote two business critical apps for speed and usability.",
  },
  {
    name: "Iowa State University",
    title: "B.S. in Software Engineering",
    duration: "AUG 2010 - MAY 2014",
    active: false,
    icon: "/static/images/experience/iastate.jpg",
    link: "https://iastate.edu/",
    bullets: [
      "Co-founder of HackISU",
      "Webmaster for Computer Science Club",
      "Teaching Assistant for Intro to Object Oriented Programming",
    ],
  },
];
