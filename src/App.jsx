import React from "react";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import SocialItems from "./components/social-items/SocialItems";

const App = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Home />
            <SocialItems />
        </React.Fragment>
    );
};

export default App;
