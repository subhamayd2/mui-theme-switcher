import { createContext } from "react";

export interface IThemeSwitcherContext {
  dark?: boolean;
  toggleDark?: Function;
}

const ThemeSwitcherContext = createContext<IThemeSwitcherContext>({});

const { Provider, Consumer } = ThemeSwitcherContext;

export { Provider, Consumer };

export default ThemeSwitcherContext;
