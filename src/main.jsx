import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./Theme";

// * ROUTING MODULES
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// * LAYOUTS IMPORT
import HeaderLayout from "./layouts/HeaderLayout";
import FooterLayout from "./layouts/FooterLayout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <HeaderLayout />
        <App />
        <FooterLayout />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
