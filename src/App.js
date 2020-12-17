import React, { useEffect, useState } from "react";
import Preloader from "./components/common/Preloader";

import Layout from "./components/layout/layout";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.addEventListener("load", function () {
      setLoading(false);
    });
  });
  return (
    <React.Fragment>
      {loading && <Preloader />}
      <Layout />
    </React.Fragment>
  );
};

export default App;
