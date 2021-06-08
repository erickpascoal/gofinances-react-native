import React from "react";
import { ThemeProvider } from "styled-components";
import themeLight from "./src/global/styles/theme/themeLight";
import { Dashboard } from "./src/pages/Dashboard";

export default function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <Dashboard />
    </ThemeProvider>
  );
}
