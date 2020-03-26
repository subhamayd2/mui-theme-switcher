import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { MuiThemeProvider, Theme } from "@material-ui/core";
import { Provider } from "./Context";
import { DARK } from "./utils/constants";

export interface ThemeSwitcherProviderProps {
  children: React.ReactElement;
  darkTheme: Theme;
  lightTheme: Theme;
  followSystem?: boolean;
  persist?: boolean;
  appId?: string;
  defaultTheme: "dark" | "light";
}

const ThemeSwitcherProvider = ({
  children,
  darkTheme,
  lightTheme,
  followSystem,
  persist,
  appId,
  defaultTheme
}: ThemeSwitcherProviderProps) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = useCallback(() => {
    setDark(prevState => !prevState);
  }, []);

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;
    const localTheme = localStorage.getItem(appId || "") || null;
    let isDark = defaultTheme === DARK;
    if (persist && appId) {
      isDark = localTheme === DARK;
    } else {
      if (persist && [undefined, null, ""].includes(appId)) {
        console.warn(
          "ThemeSwitcherProvider",
          "'persist' is useless without 'appId'"
        );
      }
      if (followSystem) {
        isDark = systemTheme;
      }
    }
    setDark(isDark);
  }, []);
  return (
    <Provider
      value={{
        dark,
        toggleDark: toggleTheme
      }}
    >
      <MuiThemeProvider theme={dark ? darkTheme : lightTheme}>
        {children}
      </MuiThemeProvider>
    </Provider>
  );
};

ThemeSwitcherProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default ThemeSwitcherProvider;
