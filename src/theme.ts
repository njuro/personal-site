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
  
  a.link:hover {
    font-weight: bold !important;
  }
  
  a.header-link {
    color: ${secondaryColor} !important;
    
    &:hover,
    &:active {
      h1 {
        color: lightgray !important;
      }
      color: lightgray !important;
    }
    
    span {
      color: gray !important;
    }
  }
  
  a.content-link {
    color: ${secondaryColor} !important;
    padding-bottom: 1px !important;
    border-bottom: 1px solid gray !important;
    :hover, :active {
      font-weight: bold !important;
    }
  }
  
  a.article-link {
    color: ${secondaryColor} !important;
    border-bottom: 1px dotted gray !important;

    :hover, :active {
      color: lightgray !important;
    }
  }
  
  .ui.header, .ui.segment {
    background-color: ${primaryColor} !important;
    color: ${secondaryColor} !important;
  }
  
  .ui.card {
    background-color: whitesmoke !important;
    
    .header, .description {
      color: ${primaryColor} !important;
    }
    
    .extra {
      a {
        color: gray !important;
        &:hover {
          color: ${primaryColor} !important;
        }
      }
    }
  }
  
  .sub.header, .meta {
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
  
  .ui.list {
    
    .item {
      border-top-color: gray !important;
    }
    
    .header {
      color: ${secondaryColor} !important;
    }
    
    .description {
      color: gray !important;
    }
  }
`;

// Prettier doesn't support createGlobalStyle, so copy CSS from above here, format it and copy back
// noinspection JSUnusedLocalSymbols
const globalStyleFormatter = styled.div``; // eslint-disable-line @typescript-eslint/no-unused-vars
