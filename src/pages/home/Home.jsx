import React from "react";
import Lottie from "react-lottie";
import Paper from "../../components/paper/Paper";
import Icons from "../../components/icons/devIcons";

import lottieAnimation from "../../lottie/coder.json";
import "./home.css";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

const Home = () => {
    return (
        <React.Fragment>
            <MainSection />
            <AboutSection />
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
                            and excel in new tools and technologies. Currently I am working as an Associate Software Engineer at
                            <a href="https://www.rolustech.com/" target="_blank" className="color-primary">
                                {" "}
                                Rolustech
                            </a>
                            .
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <Lottie options={defaultOptions} />
                </div>
            </div>
        </div>
    );
};

const AboutSection = () => {
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

            <div className="row">
                {technologies.map((tech) => {
                    return (
                        <div className="col-md-4 mb-4">
                            <Paper>
                                {tech.icon.map((icon) => {
                                    return <span className="tech-icon">{icon}</span>;
                                })}
                                <h5 className="mt-3 color-primary">{tech.title}</h5>
                            </Paper>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

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
