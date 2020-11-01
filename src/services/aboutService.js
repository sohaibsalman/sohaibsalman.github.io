import { School } from "@material-ui/icons";
import Picutre from "../static/images/about/user.jpg";

const aboutHeader = {
  heading: "Sohaib Salman",
  subHeading: "Software Developer",
  description:
    "I'm a software developer and a self learner, specialized in front-end and back-end development for large scale and complex web apps, along with a good knowledge of developing business level desktop apps.",
  column: {
    status: true,
    size: 7,
  },
  image: Picutre,
  buttons: [
    { id: 1, text: "View Portfolio", to: "/portfolio" },
    { id: 2, text: "View Resume" },
  ],
};

const whatIDo = {
  heading: "What I do",
  description:
    "I have designed and developed many web and desktop applications throughout my journey in software development. Below is a quick overview of my main technical skill sets and technologies I use.",
  skills: [
    {
      id: 1,
      icons: [
        "devicon-javascript-plain colored",
        "devicon-typescript-plain colored",
      ],
      title: "Javascript & Typescript",
      desription:
        "Good working knowledge of Javascript to develop dynamic web applications. Have a good understanding of the ES6, along with some familiarity with Typescript.",
    },
    {
      id: 2,
      icons: [
        "devicon-react-original colored",
        "devicon-angularjs-plain colored",
      ],
      title: "React and Angular",
      desription:
        "Intermediate level understanding of React js for building Single Page Apps, along with some beginner-level understanding of Angular Framework.",
    },
    {
      id: 3,
      icons: [
        "devicon-html5-plain colored",
        "devicon-css3-plain colored",
        "devicon-bootstrap-plain colored",
      ],
      title: "HTML, CSS & Bootstrap",
      desription:
        "Advanced level understanding of HTML and CSS for making a good looking basic structure of a website. Good grip on bootstrap for making a webpage fully responsive!",
    },
    {
      id: 4,
      icons: [
        "devicon-dot-net-plain colored",
        "devicon-php-plain colored",
        "devicon-java-plain colored",
      ],
      title: ".NET, PHP & Servlets",
      desription:
        "Have developed a lot of web apps using simple .NET (Web Forms, MVC, Web API) & .NET Core Web API. Also worked in PHP & Java Servlets as backend technologies.",
    },
    {
      id: 5,
      icons: ["devicon-mysql-plain colored"],
      title: "MySQL & SQL Server",
      desription:
        "Excellent in databse concepts and proficient with SQL language. Have worked with SQL Server and MySQL. Also, have a basic understanding of ORMs such as Entity Framework. ",
    },
    {
      id: 6,
      icons: ["devicon-android-plain colored"],
      title: "Android",
      desription:
        "Started learning android and currently working on it. Have a beginner's level understanding of android application development. Looking forward to learning more!",
    },
    {
      id: 7,
      icons: [
        "devicon-csharp-plain colored",
        "devicon-cplusplus-plain colored",
        "devicon-java-plain colored",
        "devicon-python-plain colored",
      ],
      title: "C#, C++, Java & Python",
      desription:
        "Excellent in core programming languages like C#, C++, and Java, along with good hands-on skills in object-oriented programming, data structures, and design patterns.",
    },
  ],
};

const academicInfo = {
  heading: "Education",
  description:
    "From childhood, I was interested in Computer Science and Information Technology and currently, I am pursuing a degree in Information Technology from Pakistan. Here is my educational background!",
  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Information Technology",
      duration: "Current",
      institute: "Punjab University College of Information Techology.",
      description:
        "Continuing to learn and explore my field of interest from one of the most reputable and oldest institute in Pakistan. PUCIT is the most famous and competitive department of Punjab University and I am lucky to be a part of it!",
    },
    {
      id: 2,
      degree: "Intermediate in Computer Science",
      duration: "2017",
      institute: "Superior College of Information Technology.",
      description:
        "After matric, joined Superior College for my intermediate and took admission in ICS. From there, I learned my first programming language C, along with some basic concepts of Databases.",
    },
    {
      id: 3,
      degree: "Matriculation (Computer Science)",
      duration: "2015",
      institute: "The New School, Model Town, Lahore.",
      description:
        "Completed my matriculation in the subjects of computer science from The New School located in Model Town Lahore. There I learned basics of computer science and not to forget THE GW BASIC.",
    },
  ],
};

export function getAboutHeader() {
  return aboutHeader;
}

export function getWhatIDo() {
  return whatIDo;
}

export function getSkills() {
  return whatIDo.skills;
}

export function getAcademicInfo() {
  return academicInfo;
}
