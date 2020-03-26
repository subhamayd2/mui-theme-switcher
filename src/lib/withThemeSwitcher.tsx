import * as React from "react";
import { Consumer } from "./Context";

const withThemeSwitcher = (Component: any) => {
  return function NewComponent(props: any) {
    return (
      <Consumer>
        {themeSwitcher => (
          <Component {...props} themeSwitcher={themeSwitcher} />
        )}
      </Consumer>
    );
  };
};

export default withThemeSwitcher;
