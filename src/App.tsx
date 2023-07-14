import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import GlobalStyle from "./Global.Style";

import { ConfigProvider } from "antd";

import { ThemeProvider } from "styled-components";
import {
  antDComponents,
  antDTheme,
  customTheme,
} from "./ThemeConfig/Variables";
import { useColorConfig } from "./ThemeConfig/UseColorConfig";
import Layout from "./Components/Layout/Layout";

function App() {
  const [handleChange, themeColor, themevalue] = useColorConfig();
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: antDTheme(themeColor),
          components: antDComponents(themeColor),
        }}
      >
        <ThemeProvider theme={customTheme(themeColor)}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <Layout themeChange={handleChange} themevalue={themevalue} />
                }
              >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ConfigProvider>
    </div>
  );
}

export default App;
