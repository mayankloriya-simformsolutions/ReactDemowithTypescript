// import type { Preview } from "@storybook/react";

// const preview: Preview = {
//   parameters: {
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },
// };

// export default preview;
// .storybook/preview.tsx
import { ConfigProvider } from "antd";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/Global.Style";
import { ThemeMode } from "../src/ThemeConfig/ThemeColor";
import {
  antDComponents,
  antDTheme,
  customTheme,
} from "../src/ThemeConfig/Variables";
import React from "react";

const withTheme = (StoryFn) => {
  return (
    <ConfigProvider
      theme={{
        token: antDTheme(ThemeMode.Default),
        components: antDComponents(ThemeMode.Default),
      }}
    >
      <ThemeProvider theme={customTheme(ThemeMode.Default)}>
        <GlobalStyle />
        <StoryFn />
      </ThemeProvider>
    </ConfigProvider>
  );
};

// export all decorators that should be globally applied in an array
export const decorators = [withTheme];