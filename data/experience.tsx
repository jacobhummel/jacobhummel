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
        <Link href="https://target.com/redcard" className="underline">
          target.com/redcard
        </Link>
        . <br />
        <br />
        Developed in-store Electron app used to pay RedCard (Target Credit Card)
        balance. App interacts with register peripherals to lookup guest's
        account, process payment, generate and print receipt. Used by thousands
        of guests daily at 1800+ Target stores.
      </>
    ),
    skills: [
      skills.React,
      skills.TypeScript,
      skills.NextJS,
      skills.ReactQuery,
      skills.Electron,
      skills.Emotion,
      skills.StyledComponents,
      skills.ReactTestingLibrary,
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
    description: (
      <>
        Developed a large vendor facing web app for setting up and managing
        retail item data. Items have up to hundreds of complex internal (details
        needed for business) and external attributes (ones a guest could see)
        with business rules pertaining to each, so the UI had to adapt and be
        highly flexible &amp; performant to ensure it can handle dynamic
        validation + side effects while editing hundreds of unique items at a
        time. <br />
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
      skills.Emotion,
      skills.ReactTestingLibrary,
      skills.Cypress,
      skills.Vela,
      skills.Drone,
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
      skills.OfficeUIFabric,
    ],
  },
  {
    name: "Boogie",
    title: "Software Engineer / Co-founder",
    duration: "AUG 2014 - PRESENT",
    active: true,
    icon: "/static/images/experience/boogie.png",
    link: "https://boogie.io",
    description:
      "Develop a React Native skydiving logbook app used by thousands of skydivers around the world. App enables users to record their skydives using their phone's altimeter or manually. Collaborate remotely with developers and a designer. Launched the first version in native Android in 2014. Re-wrote for iOS and Android using React Native in 2017.",
    skills: [
      skills.React,
      skills.TypeScript,
      skills.ReactNative,
      skills.Expo,
      skills.AWS,
      skills.Python,
      skills.Django,
    ],
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
    skills: [
      skills.JavaScript,
      skills.Jekyll,
      skills.AngularJS,
      skills.jQuery,
      skills.CSS3,
      skills.HTML5,
    ],
  },
  // {
  //   name: "Thomson Reuters",
  //   title: "Technology Intern",
  //   duration: "SUMMER 2013",
  //   active: false,
  //   icon: "/static/images/experience/thomson-reuters.jpg",
  //   link: "https://www.thomsonreuters.com/en.html",
  //   description:
  //     "Full-Stack web developer using the Spring MVC Framework. Added features and improvements to an internal business application.",
  // },
  // {
  //   name: "Emerson Fisher",
  //   title: "Web Development Intern",
  //   duration: "SUMMER 2012",
  //   active: false,
  //   icon: "/static/images/experience/emerson.jpg",
  //   link: "http://www.emerson.com/en-us/automation/fisher",
  //   description:
  //     "Full-Stack web developer using ASP.NET Web Forms. Rewrote two business critical apps for speed and usability.",
  // },
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
