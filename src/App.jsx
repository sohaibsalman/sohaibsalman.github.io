import React from "react";

import Navbar from "./components/navbar/Navbar";
import Email from "./components/social-items/Email";
import Home from "./pages/home/Home";

const App = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Home />
            <Email emailAddress="sohaib.it40@gmail.com" />
        </React.Fragment>
    );
};

export default App;
