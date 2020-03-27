import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppWithHook from "./AppWithHook";
// import AppWithHOC from "./AppWithHOC";
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
    followSystem
  >
    <AppWithHook />
  </ThemeSwitcherProvider>,
  document.getElementById("root")
);
