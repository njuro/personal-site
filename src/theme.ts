import styled, {
  createGlobalStyle,
  DefaultTheme,
  ThemeProps,
} from "styled-components/macro";

export const theme: DefaultTheme = {
  colors: {
    primary: "rgb(51, 51, 51)",
    secondary: "rgba(255, 255, 255, 0.9)",
  },
};

export const primaryColor = (props: ThemeProps<DefaultTheme>) =>
  props.theme.colors.primary;
export const secondaryColor = (props: ThemeProps<DefaultTheme>) =>
  props.theme.colors.secondary;

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
    font-size: 16px; 
    line-height: 1.8;
    color: ${secondaryColor} !important;
    background-color: ${primaryColor} !important;
  }
  
  .ui.header, ui.segment {
    background-color: ${primaryColor} !important;
    color: ${secondaryColor} !important;
  }
  
  .sub.header {
    color: gray !important
  }
  
  .ui.menu {
    font-size: 16px !important;
    background-color: ${primaryColor} !important;
    
    & > .item {
      color: ${secondaryColor} !important;
      border-bottom-color: ${secondaryColor} !important;
      :not(.active) {
        border-bottom: none !important;
      }
    }

    border-bottom: none !important;
  }
`;

// Prettier doesn't support createGlobalStyle, so copy CSS from above here, format it and copy back
// noinspection JSUnusedLocalSymbols
const globalStyleFormatter = styled.div``; // eslint-disable-line @typescript-eslint/no-unused-vars
