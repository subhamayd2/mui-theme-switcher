import { useContext } from "react";
import ThemeSwitcherContext, { IThemeSwitcherContext } from "./Context";

function useThemeSwitcher(): IThemeSwitcherContext {
  const { dark, toggleDark } = useContext(ThemeSwitcherContext);
  return { dark, toggleDark };
}

export default useThemeSwitcher;
