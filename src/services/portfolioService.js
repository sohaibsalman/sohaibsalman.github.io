import DesignFood from "../static/images/portfolio/design/fast-food.png";
import DesignPhotography from "../static/images/portfolio/design/photography.png";

import DesktopTMS from "../static/images/portfolio/desktop/tms.png";
import DesktopChat from "../static/images/portfolio/desktop/chat-app.png";
import DesktopCalculator from "../static/images/portfolio/desktop/calculator.png";
import DesktopTraveling from "../static/images/portfolio/desktop/traveling.png";

import WebTMS from "../static/images/portfolio/web/tms.png";
import WebFoodie from "../static/images/portfolio/web/foodie.png";
import WebFixit from "../static/images/portfolio/web/fixit.png";
import WebPortfolio from "../static/images/portfolio/web/porfolio-dark.png";
import WebLMS from "../static/images/portfolio/web/shaheen-library.png";
import WebCodeWork from "../static/images/portfolio/web/codework.png";

const types = Object.freeze({
  all: 0,
  ui: 1,
  frontend: 2,
  backend: 3,
  web: 4,
  desktop: 5,
  mobile: 6,
});

const portfolioHeader = {
  heading: "Portfolio",
  description: [
    {
      id: 1,
      text:
        "Welcome to my online portfolio. Here you can see all my previous work and projects along with their description. I have done a satisfactory work for the clients starting from basic programming tasks to business level softwares. Want some help building your software?",
    },
  ],
};

const projectFilters = [
  "All",
  "UI Design",
  "Frontend",
  "Backend",
  "Web Apps",
  "Desktop Apps",
  "Mobile Apps",
];

const projects = [
  {
    id: 1,
    title: "Desktop Tailor System",
    image: DesktopTMS,
    description: "",
    type: [types.desktop, types.backend],
    tools: "Win Forms, .NET, ADO.NET, C#, SQL Server",
  },
  {
    id: 2,
    title: "Online Tailor System",
    image: WebTMS,
    description: "",
    type: [types.web, types.frontend, types.backend],
    tools: "Web Forms, ASP.NET, ADO.NET, C#, SQL Server",
  },
  {
    id: 11,
    title: "CodeWork.pk",
    image: WebCodeWork,
    description: "",
    type: [types.web, types.frontend, types.backend],
    tools: "Web Forms, ASP.NET, ADO.NET, C#, SQL Server",
  },
  {
    id: 3,
    title: "Fast Food UI",
    image: DesignFood,
    description: "",
    type: [types.ui],
    tools: "Adobe Xd, Figma",
  },
  {
    id: 12,
    title: "Traveling System",
    image: DesktopTraveling,
    description: "",
    type: [types.desktop, types.backend],
    tools: "Win Forms, .NET, ADO.NET, C#, SQL Server",
  },
  {
    id: 4,
    title: "Photographer UI",
    image: DesignPhotography,
    description: "",
    type: [types.ui],
    tools: "Adobe Xd, Figma",
  },
  {
    id: 5,
    title: "Calculator",
    image: DesktopCalculator,
    description: "",
    type: [types.desktop],
    tools: "Java Swing, Java",
  },
  {
    id: 6,
    title: "Chat Application",
    image: DesktopChat,
    description: "",
    type: [types.desktop, types.backend],
    tools: "Java Swing, Java Sockets, Java, MySQL",
  },
  {
    id: 7,
    title: "Fixit Website",
    image: WebFixit,
    description: "",
    type: [types.frontend, types.ui],
    tools: "HTML, CSS/SASS, Bootstrap, JavaScript, jQuery",
  },
  {
    id: 8,
    title: "Foodie Website",
    image: WebFoodie,
    description: "",
    type: [types.frontend, types.ui],
    tools: "HTML, CSS/SASS, Bootstrap, JavaScript, jQuery",
  },
  {
    id: 9,
    title: "Personal Portfolio",
    image: WebPortfolio,
    description: "",
    type: [types.frontend, types.ui],
    tools: "HTML, CSS/SASS, Bootstrap, JavaScript, jQuery",
  },
  {
    id: 10,
    title: "Online Library System",
    image: WebLMS,
    description: "",
    type: [types.web, types.frontend, types.backend],
    tools: "HTML, CSS, JavaScript, PHP, MySQL",
  },
];

export function getPortfolioHeader() {
  return portfolioHeader;
}

export function getProjectFilters() {
  return projectFilters;
}

export function getProjects() {
  return projects;
}
