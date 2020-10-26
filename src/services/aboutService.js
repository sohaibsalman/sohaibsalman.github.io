import Picutre from "../static/images/profile/sohaib.jpg";

const aboutHeader = {
  heading: "Sohaib Salman",
  subHeading: "Software Developer",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eos magnam quas, repellendus quos quia unde at, officiis exercitationem ut praesentium? Assumenda saepe repudiandae necessitatibus inventore? Sapiente sequi laboriosam veniam.",
  column: {
    status: true,
    size: 6,
  },
  image: Picutre,
  buttons: [
    { id: 1, text: "View Portfolio" },
    { id: 2, text: "View Resume" },
  ],
};

const whatIDo = {
  heading: "What I do",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eos magnam quas, repellendus quos quia unde at, officiis exercitationem ut praesentium? Assumenda saepe repudiandae necessitatibus inventore? Sapiente sequi laboriosam veniam.",
  skills: [
    {
      id: 1,
      icons: [
        "devicon-javascript-plain colored",
        "devicon-typescript-plain colored",
      ],
      title: "Javascript & Typescript",
      desription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eos magnam quas, repellendus quos quia unde at, officiis exercitationem ut praesentium?",
    },
    {
      id: 2,
      icons: [
        "devicon-react-original colored",
        "devicon-angularjs-plain colored",
      ],
      title: "React and Angular",
      desription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eos magnam quas, repellendus quos quia unde at, officiis exercitationem ut praesentium?",
    },
    {
      id: 2,
      icons: [
        "devicon-html5-plain colored",
        "devicon-css3-plain colored",
        "devicon-bootstrap-plain colored",
      ],
      title: "HTML, CSS & Bootstrap",
      desription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eos magnam quas, repellendus quos quia unde at, officiis exercitationem ut praesentium?",
    },
    {
      id: 3,
      icons: ["devicon-sass-original colored"],
      title: "Sass",
      desription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eos magnam quas, repellendus quos quia unde at, officiis exercitationem ut praesentium?",
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
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eos magnam quas, repellendus quos quia unde at, officiis exercitationem ut praesentium?",
    },
    {
      id: 5,
      icons: ["devicon-mysql-plain colored"],
      title: "MySQL & SQL Server",
      desription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eos magnam quas, repellendus quos quia unde at, officiis exercitationem ut praesentium?",
    },
    {
      id: 6,
      icons: ["devicon-android-plain colored"],
      title: "Android",
      desription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eos magnam quas, repellendus quos quia unde at, officiis exercitationem ut praesentium?",
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
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eos magnam quas, repellendus quos quia unde at, officiis exercitationem ut praesentium?",
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
