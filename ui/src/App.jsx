import React from "react";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Pages from "./pages/Pages";
import SocialItems from "./components/social-items/SocialItems";

const App = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Pages />
            <SocialItems />
            <Footer />
        </React.Fragment>
    );
};

export default App;
