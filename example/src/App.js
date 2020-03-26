import React from "react";
import { Paper, Button, withStyles, Typography } from "@material-ui/core";
import { useThemeSwitcher } from "mui-theme-switcher";

const App = ({ classes: { paperStyles } }) => {
  const { dark, toggleDark } = useThemeSwitcher();
  return (
    <Paper className={paperStyles}>
      <Typography variant="h5">
        Let there be {dark ? "darkness" : "light"}
      </Typography>
      <Button onClick={toggleDark}>Toggle Theme</Button>
    </Paper>
  );
};

const styles = () => ({
  paperStyles: {
    width: "100vw",
    height: "100vh",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0,
    transition: "all 500ms"
  }
});

export default withStyles(styles)(App);
