# mui-theme-switcher

> A dark mode theme switcher for Material UI

[![NPM](https://img.shields.io/npm/v/mui-theme-switcher.svg)](https://www.npmjs.com/package/mui-theme-switcher) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![npm](https://img.shields.io/npm/dw/mui-theme-switcher)

## Install

```bash
npm install --save mui-theme-switcher
```

## Usage

### In App root (example: `index.js`)

```tsx
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
```

### In your component (example: `App.js`)

```tsx
import { useThemeSwitcher } from "mui-theme-switcher";

const App = () => {
  const { dark, toggleDark } = useThemeSwitcher();
  return (
    <Paper>
      <Typography variant="h5">
        Let there be {dark ? "darkness" : "light"}
      </Typography>
      <Button onClick={toggleDark}>Toggle Theme</Button>
    </Paper>
  );
};
```

## Props

| Prop             | Type                                     | Description                                                                                   |
| ---------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------- |
| children         | `node`                                   | The app which will be themed                                                                  |
| darkTheme        | `Theme`                                  | Dark variant of the theme. _`Theme`_ object created using `@material-ui`'s `createMuiTheme`   |
| lightTheme       | `Theme`                                  | Light variant of the theme. _`Theme`_ object created using `@material-ui`'s `createMuiTheme`  |
| followSystem     | `boolean` (default `false`)              | Whether the App should follow system/browser theme.                                           |
| persist          | `boolean` (default `false`)              | Whether the App should save the theme locally                                                 |
| appId            | `string` (_Required_ if using `persist`) | Unique ID of the App.                                                                         |
| defaultTheme     | enum `"dark" | "light"`                  | Default theme of the App                                                                      |
| smoothTransition | `boolean` (default `true`)               | Whether to smooth out the transition between themes. _This only affects the background color_ |

## License

MIT © [](https://github.com/)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
