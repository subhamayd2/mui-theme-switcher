import React, { Component } from "react";
import { Paper, Button, withStyles, Typography } from "@material-ui/core";
import { withThemeSwitcher } from "mui-theme-switcher";

class AppWithHOC extends Component {
  render() {
    const {
      classes: { paperStyles },
      themeSwitcher: { dark, toggleDark }
    } = this.props;
    return (
      <Paper className={paperStyles}>
        <Typography variant="h5">
          Let there be {dark ? "darkness" : "light"}
        </Typography>
        <Button onClick={toggleDark}>Toggle Theme</Button>
      </Paper>
    );
  }
}

const styles = () => ({
  paperStyles: {
    width: "100vw",
    height: "100vh",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0
  }
});

export default withStyles(styles)(withThemeSwitcher(AppWithHOC));
