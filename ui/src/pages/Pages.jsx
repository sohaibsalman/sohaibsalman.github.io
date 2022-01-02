import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./home/Home";
import Projects from "./projects/Projects";
import Services from "./services/Services";
import Resume from "./resume/Resume";
import Contact from "./contact/Contact";

const Pages = () => {
    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="services" element={<Services />} />
                <Route path="resume" element={<Resume />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default Pages;
