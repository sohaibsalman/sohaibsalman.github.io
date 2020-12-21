const resume = {
  education: [
    {
      degree: "BS Information Technology",
      slogan: "BS-IT",
      date: "2017 ~ Present",
      institute:
        "Punjab University College of Information Technology (PUCIT), Lahore, Pakistan",
      percentage: "3.54",
    },
    {
      degree: "Intermediate",
      slogan: "ICS",
      date: "2015 ~ 2017",
      institute: "Superior College, Lahore, Pakistan",
      percentage: "84.72",
    },
  ],
  experience: [
    {
      designation: "Internee",
      place: "AIMRL, PUCIT",
      tenure: "Current",
      position: "Full Stack Developer",
    },
    {
      designation: "Teaching Assistant",
      place: "PUCIT",
      tenure: "September 2020 ~ Current",
      position: "Web Engineering",
    },
  ],
  projects: [
    {
      title: "Intelligent Remote Academia (FYP)",
      description:
        "Developing a platform to promote remote and distance learning in Pakistan, with aim to imporve existing problems and minimize difficulties faced by academias. Majorly workig on client-side development using React JS and Material UI.",
    },
    {
      title: "Tailor System (Web and Desktop)",
      description:
        "Developed a tailor management system to automate tiresome work and centralize the data. Used C#, .NET, Windows Forms, Web Forms, ADO.NET and SQL Server for the development.",
    },
    {
      title: "Chat Application",
      description:
        "Developed a realtime GUI based chat application to send instant messages. Used JAVA, JAVA Swings, MySql and Socket Programming to develop this application.",
    },
  ],
  skills: {
    technical: [
      "HTML, CSS, SCSS, Bootstrap",
      "JavaScript, jQuery, TypeScript",
      "React JS, Angular",
      ".NET, .NET Core, ASP.NET",
      "C++, C#, Java, SQL",
      "Design and implement database structures",
      "Git, GitHub, GitFlow",
    ],
    professional: [
      "Strong problem solver",
      "Good analytical skills",
      "Persistant",
    ],
  },
  awards: [
    {
      titlte: "Laptop, PM Scheme",
      year: 2019,
    },
    {
      titlte: "Merit based scholarship, Govt. Punjab",
      year: 2018,
    },
  ],
  languages: [
    {
      name: "Urdu",
      info: "Native",
    },
    {
      name: "English",
      info: "Professional",
    },
  ],
};

export function getEducationalInfo() {
  return resume.education;
}

export function getExperienceInfo() {
  return resume.experience;
}

export function getProjectsInfo() {
  return resume.projects;
}

export function getSkillsInfo() {
  return resume.skills;
}

export function getAwardsInfo() {
  return resume.awards;
}

export function getLanguagesInfo() {
  return resume.languages;
}
