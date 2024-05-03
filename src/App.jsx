import React from "react";

// * ROUTING MODULES
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// * PAGES IMPORT
import HomePage from "./pages/HomePage";
import WebDevPage from "./pages/WebDevPage";
import AppDevPage from "./pages/AppDevPage";
import MarketingPage from "./pages/MarketingPage";
import ContactPage from "./pages/ContactPage";
import Lost404Page from "./pages/Lost404Page";
import Lost500Page from "./pages/Lost500Page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/webdevelopment" element={<WebDevPage />} />
      <Route path="/appdevelopment" element={<AppDevPage />} />
      <Route path="/marketing" element={<MarketingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/404" element={<Lost404Page />} />
      <Route path="/500" element={<Lost500Page />} />
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
