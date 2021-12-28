import React from "react";

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer">
                <div className="footer-inner">
                    <p>
                        This website is designed and developed by{" "}
                        <span className="color-primary"> Sohaib Salman </span>
                        using React JS
                    </p>
                    <p className="mt-2">
                        All rights reserved{" "}
                        <span className="color-primary">&copy; </span>
                        {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Footer;
