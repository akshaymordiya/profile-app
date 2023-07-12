import { ThemeProvider as MuiThemeProvider } from "@mui/material";

import { LightTheme } from "./schema/Light";

const defaultThemeKey = "Light"

// since the app supports only white theme in v1
const themes = {
  "Light": LightTheme
}

const ThemeProvider = ({ children }) => {
  return (
      <MuiThemeProvider theme={themes[defaultThemeKey]}>{children}</MuiThemeProvider>
  )
}

export default ThemeProvider