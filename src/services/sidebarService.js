const links = [
  { id: 1, title: "About", url: "/about" },
  { id: 2, title: "Skills", url: "/skills" },
  { id: 3, title: "Portfolio", url: "/portfolio" },
  { id: 4, title: "Services", url: "/services" },
  { id: 5, title: "Contact", url: "/contact" },
];

const userInfo = {
  fullName: "Sohaib Salman",
  description:
    "Hi, my name is Sohaib Salman and I'm a software developer. Welcome to my personal website",
};

export function getSidebarLinks() {
  return links;
}

export function getUserInfo() {
  return userInfo;
}
