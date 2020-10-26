const aboutHeader = {
  heading: "Sohaib Salman",
  subHeading: "Software Developer",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eos magnam quas, repellendus quos quia unde at, officiis exercitationem ut praesentium? Assumenda saepe repudiandae necessitatibus inventore? Sapiente sequi laboriosam veniam.",
  column: {
    status: true,
    size: 6,
  },
  image: "../../static/images/profile/sohaib.jpg",
  buttons: [
    { id: 1, text: "View Portfolio" },
    { id: 2, text: "View Resume" },
  ],
};

export function getAboutHeader() {
  return aboutHeader;
}
