import React from "react";
import Paper from "../../components/paper/Paper";
import Icons from "../../components/icons/devIcons";
import TimeLine from "../../components/common/timeline/Timeline";

import "./home.css";

const Home = () => {
    return (
        <React.Fragment>
            <MainSection />
            <AboutSection />
            <EducationSection />
        </React.Fragment>
    );
};

export default Home;

const MainSection = () => {
    return (
        <div className="home-main">
            <div className="row">
                <div className="col-md-8">
                    <div className="home-main-content">
                        <h4 className="color-primary home-sub-heading">Hey! I'm</h4>
                        <h1 className="home-main-heading">Sohaib Salman</h1>
                        <h3 className="home-designation color-primary">Software Engineer</h3>
                        <p className="home-description">
                            I'm a software developer and a self-learner, specializing in full-stack web application development with a focus to learn
                            and excel in new tools and technologies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AboutSection = () => {
    const technologies = [
        {
            title: "JavaScript, Typescript and jQuery",
            icon: [Icons.js, Icons.ts, Icons.jquery],
        },
        {
            title: "React JS and Angular",
            icon: [Icons.react, Icons.angular],
        },
        {
            title: "HTML, CSS, Bootstrap, MaterialUI",
            icon: [Icons.html, Icons.css, Icons.bootstrap, Icons.materialUI],
        },
        {
            title: "Node JS, .NET, PHP, Java Servlets",
            icon: [Icons.nodejs, Icons.dotnet, Icons.php, Icons.java],
        },
        {
            title: "MongoDB, MySQL, SQL Server",
            icon: [Icons.mongodb, Icons.mysql, Icons.sqlserver],
        },
        {
            title: "React Native and Android",
            icon: [Icons.react, Icons.android],
        },
        {
            title: "C#, C++, Python",
            icon: [Icons.cSharp, Icons.cpp, Icons.python],
        },
        {
            title: "Git, GitHub, GitLab",
            icon: [Icons.git, Icons.github, Icons.gitlab],
        },
    ];
    return (
        <section className="section-about">
            <h1 className="color-primary">What I Do</h1>
            <p className="mt-4">
                I love to develop things that run over the internet. I am in a quest of keeping myself up to date according to the new technologies
                and platforms, and for that I love to read tech articles, do certifications and get my hands dirty by working on simple ideas of my
                own!
            </p>
            <p>
                Throughout my journey, I have worked with different technologies to build solutions. Here are some of the technologies that I have
                worked with:
            </p>

            <div className="row mt-4">
                {technologies.map((tech) => {
                    return (
                        <div className="col-sm-12 col-md-6 mb-4">
                            <Paper>
                                {tech.icon.map((icon) => {
                                    return <span className="tech-icon mt-3">{icon}</span>;
                                })}
                                <h6 className="mt-4 mb-3 color-primary">{tech.title}</h6>
                            </Paper>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

const EducationSection = () => {
    const academic = {
        heading: "Education",
        description:
            "From childhood, I was interested in Computer Science and Information Technology and currently, I am pursuing a degree in Information Technology from Pakistan. Here is my educational background!",
        education: [
            {
                id: 1,
                degree: "Bachelor of Science in Information Technology",
                duration: "2017 ~ 2021",
                institute: "Punjab University College of Information Techology.",
                description:
                    "Continued to learn and explore my field of interest from one of the most reputable and oldest institute in Pakistan. PUCIT is the most famous and competitive department of Punjab University and I am lucky to be a part of it!",
            },
            {
                id: 2,
                degree: "Intermediate in Computer Science",
                duration: "2015 ~ 2017",
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
    return (
        <section className="section-education">
            <h1 className="color-primary">Education</h1>

            <div className="timeline">
                {academic.education.map((education) => {
                    return (
                        <TimeLine
                            key={education.id}
                            heading={education.degree}
                            date={education.duration}
                            subHeading={education.institute}
                            description={education.description}
                        />
                    );
                })}
            </div>
        </section>
    );
};
