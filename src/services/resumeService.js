const resume = {
  education: [
    {
      degree: "BS Information Technology",
      slogan: "BS-IT",
      date: "2017 ~ Present",
      institute:
        "Punjab University College of Information Technology (PUCIT), Lahore, Pakistan",
      percentage: "3.45",
    },
    {
      degree: "Intermediate",
      slogan: "ICS",
      date: "2015 ~ 2017",
      institute: "Superior College, Lahore, Pakistan",
      percentage: "84.72",
    },
  ],
};

export function getEducationalInfo() {
  return resume.education;
}
