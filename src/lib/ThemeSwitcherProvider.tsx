import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { MuiThemeProvider, Theme, withStyles } from "@material-ui/core";
import { Provider } from "./Context";
import { DARK, LIGHT } from "./utils/constants";

export interface ThemeSwitcherProviderProps {
  classes: any;
  children: React.ReactElement;
  darkTheme: Theme;
  lightTheme: Theme;
  followSystem?: boolean;
  persist?: boolean;
  appId?: string;
  defaultTheme: "dark" | "light";
  smoothTransition?: boolean;
}

const ThemeSwitcherProvider = ({
  classes: { wrapper },
  children,
  darkTheme,
  lightTheme,
  followSystem,
  persist,
  appId,
  defaultTheme,
  smoothTransition
}: ThemeSwitcherProviderProps) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = useCallback(() => {
    setDark(prevState => {
      const current = !prevState;
      if (persist && appId) {
        localStorage.setItem(appId, current ? DARK : LIGHT);
      }
      return current;
    });
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
        console.error(
          "ThemeSwitcherProvider",
          "'persist' is useless without 'appId'. Consider providing a unique 'appId' for your app."
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
        {smoothTransition ? (
          <div className={wrapper}>{children}</div>
        ) : (
          children
        )}
      </MuiThemeProvider>
    </Provider>
  );
};

const styles = () => ({
  wrapper: {
    "& *": {
      transition: "background 200ms"
    }
  }
});

ThemeSwitcherProvider.propTypes = {
  children: PropTypes.element.isRequired
};

ThemeSwitcherProvider.defaultProps = {
  smoothTransition: true
};

export default withStyles(styles, { withTheme: false })(ThemeSwitcherProvider);
