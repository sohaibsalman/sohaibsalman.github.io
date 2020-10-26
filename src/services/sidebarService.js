const links = [
  { id: 1, title: "About", url: "/about" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Services", url: "/services" },
  { id: 4, title: "Contact", url: "/contact" },
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
