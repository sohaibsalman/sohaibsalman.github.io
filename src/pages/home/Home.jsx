import React from "react";
import Lottie from "react-lottie";

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
            <HomeMain />
        </React.Fragment>
    );
};

export default Home;

const HomeMain = () => {
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
