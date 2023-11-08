import { defaultTheme } from "../styles/theme/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components"{
    export interface defaultTheme extends ThemeType{}
}
//With this code, it makes our typescript more dynamic, helping to type the theme