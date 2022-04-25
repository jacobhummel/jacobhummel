import Link from "components/Link";
import { skills } from "./skills";

export const experience = [
  {
    name: "Target – Apply for RedCard",
    title: "Sr. Software Engineer",
    duration: "APR 2021 - PRESENT",
    active: true,
    icon: "/static/images/experience/target.jpg",
    link: "https://www.target.com",
    description: (
      <>
        Currently rewriting{" "}
        <Link href="target.com/redcard">target.com/redcard</Link>. <br />
        <br />
        Developed an in store Electron app used to pay RedCard (Target Credit
        Card) balance. App interacted with register peripherals to identify
        guest, process payment using all valid tenders, and generate and print
        receipts.
      </>
    ),
    skills: [
      skills.React,
      skills.TypeScript,
      skills.NextJS,
      skills.ReactQuery,
      skills.Jest,
      skills.Cypress,
      skills.Vela,
    ],
  },
  {
    name: "Target – LaunchPad",
    title: "Sr. Software Engineer",
    duration: "SEPT 2018 - APR 2021",
    active: false,
    icon: "/static/images/experience/target.jpg",
    link: "https://www.target.com",
    description:
      "Developed a large vendor facing web app for setting up and managing retail item data. Built with React, Redux, TypeScript, Apollo Client / Server (GraphQL), NodeJS, and CSS in JS (Emotion). Testing automation with Jest, React Testing Library, and Cypress. CI/CD with Drone.",
    skills: [
      skills.React,
      skills.TypeScript,
      skills.NextJS,
      skills.ReactQuery,
      skills.Jest,
      skills.Cypress,
      skills.Vela,
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
      "Develop internal web portals and reusable components using React, TypeScript, SharePoint Framework, Sass, Azure Functions, and PowerShell.  Establish development standards on an evergreen cloud platform in SharePoint Online. Collaboration with front-end engineers, a UX designer, Accessibility team, product owner, and stakeholders.",
  },
  {
    name: "Boogie",
    title: "Co-founder",
    duration: "AUG 2014 - PRESENT",
    active: true,
    icon: "/static/images/experience/boogie.png",
    link: "https://boogie.io",
    description:
      "Develop a React Native skydiving logbook app used by thousands of skydivers around the world. App allows users to record their skydives with their phone's altimeter or manually. Collaborate remotely with developers and a designer. Launched the first version in native Android in 2014. Re-wrote for iOS and Android using React Native in 2017.",
  },
  {
    name: "Visual Logic",
    title: "UX Developer",
    duration: "JAN 2014 - MAR 2017",
    active: false,
    icon: "/static/images/experience/vlg.png",
    link: "https://vlgux.com",
    description:
      "Develop web and mobile apps in collaboration with UX Designers and clients. Apps vary from prototype to production level. Responsible for all aspects of development including frontend, backend, database, and server. Communicate development constraints to shape product designs.",
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
      "3.46 GPA",
      "Co-founder of HackISU",
      "Webmaster for Computer Science Club",
      "Teaching Assistant for Intro to Object Oriented Programming",
    ],
  },
];
