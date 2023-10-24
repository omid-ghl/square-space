const theme = {
  "--theme-primary": "blue",
  "--theme-secondary": "red",
  "--theme-text-base": "white",
};

export function applyTheme(theme: { [x: string]: string | null }) {
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar]);
  });
}

export function createTheme({ primary, secondary, textBase }: any) {
  return {
    "--theme-primary": primary,
    "--theme-secondary": secondary,
    "--theme-text-base": textBase,
  };
}

export const palette = {
  primary: "#36454f",
  secondary: "#010421",
  dark: "#262626",
  black: "#000000",
  textBase: "white",
  darkBlue: "#010421",
};

const baseTheme = createTheme({
  primary: "blue",
  secondary: "red",
  textBase: "white",
});

const darkTheme = createTheme(palette);

export { darkTheme, baseTheme, theme };
