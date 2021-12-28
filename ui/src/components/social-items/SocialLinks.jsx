import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

const SocialLinks = () => {
    return (
        <div className="social-item social-item--links">
            <ul>
                {socialLinks.map((social, index) => (
                    <li key={index} className="social-link">
                        <a href={social.url} target="_blank">
                            {social.icon}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="line-div" />
        </div>
    );
};

export default SocialLinks;

const socialLinks = [
    {
        icon: <FiGithub size={25} />,
        url: "https://github.com/sohaibsalman",
    },
    {
        icon: <FiLinkedin size={25} />,
        url: "https://www.linkedin.com/in/sohaibsalman/",
    },
    {
        icon: <FiInstagram size={25} />,
        url: "https://www.instagram.com/sohaib.salman/",
    },
    {
        icon: <FiFacebook size={25} />,
        url: "https://www.facebook.com/S0haibSalman",
    },
];
