import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeSwitcherProvider } from "mui-theme-switcher";
import { createMuiTheme } from "@material-ui/core";

const lightTheme = createMuiTheme();
const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

ReactDOM.render(
  <ThemeSwitcherProvider
    lightTheme={lightTheme}
    darkTheme={darkTheme}
    defaultTheme="dark"
  >
    <App />
  </ThemeSwitcherProvider>,
  document.getElementById("root")
);
