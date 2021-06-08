import "styled-components";

import themeLight from "./themeLight";

declare module "styled-components" {
  type ThemeType = typeof themeLight;

  export interface DefaultTheme extends ThemeType {}
}
