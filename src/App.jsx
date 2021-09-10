import React from "react";

import Navbar from "./components/navbar/Navbar";
import SocialItems from "./components/social-items/SocialItems";
import Pages from "./pages/Pages";

const App = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Pages />
            <SocialItems />
        </React.Fragment>
    );
};

export default App;
