import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";

const THEME_KEY = "portfolio_theme";

function applyTheme(theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
}

export default function App() {
  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;

    const initial = saved || (prefersDark ? "dark" : "light");
    applyTheme(initial);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      // Minimal: keep scroll-to-top on route change
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    // React Router doesn't expose a global listener here.
    // We keep it simple and handle per page where needed.
    return () => {};
  }, []);

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar themeKey={THEME_KEY} onApplyTheme={applyTheme} />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
