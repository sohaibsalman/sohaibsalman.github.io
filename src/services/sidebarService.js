import { Person } from "@material-ui/icons";

const links = [
  {
    id: 1,
    title: "About",
    url: "/about",
    icon: <box-icon name="user" color="white" />,
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
    icon: <box-icon name="book-content" color="white" />,
  },
  {
    id: 3,
    title: "Services",
    url: "/services",
    icon: <box-icon name="server" color="white" />,
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
    icon: <box-icon name="mail-send" color="white" />,
  },
];

const userInfo = {
  fullName: "Sohaib Salman",
  description:
    "Hi, my name is Sohaib Salman and I'm a software developer. Welcome to my personal website!",
};

export function getSidebarLinks() {
  return links;
}

export function getUserInfo() {
  return userInfo;
}
