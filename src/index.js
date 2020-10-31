import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

import "boxicons";

import theme from "./themes/theme";
import App from "./App";

import "./index.css";

import "devicon/devicon.min.css";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
