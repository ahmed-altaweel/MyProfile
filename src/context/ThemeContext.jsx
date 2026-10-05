import React, { createContext, useContext, useState, useEffect } from 'react';
import { colorThemes, defaultThemeId } from '../data/themes.js';

const ThemeContext = createContext({
  currentTheme: defaultThemeId,
  themeData: colorThemes[defaultThemeId],
  setTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('ahmed_portfolio_theme');
      return saved && colorThemes[saved] ? saved : defaultThemeId;
    } catch {
      return defaultThemeId;
    }
  });

  // Dev-only check: verify that all themes have all variables present in default theme
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const defaultVars = Object.keys(colorThemes[defaultThemeId]?.variables || {});
      Object.entries(colorThemes).forEach(([id, theme]) => {
        const themeVars = theme.variables || {};
        const missing = defaultVars.filter((v) => !(v in themeVars));
        if (missing.length > 0) {
          console.warn(`[ThemeContext] Theme "${id}" is missing variables:`, missing);
        }
      });
    }
  }, []);

  useEffect(() => {
    const theme = colorThemes[currentTheme] || colorThemes[defaultThemeId];
    const root = document.documentElement;

    Object.entries(theme.variables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    try {
      localStorage.setItem('ahmed_portfolio_theme', currentTheme);
    } catch {
      // Storage unavailable, ignore
    }
  }, [currentTheme]);

  const value = {
    currentTheme,
    themeData: colorThemes[currentTheme] || colorThemes[defaultThemeId],
    setTheme: setCurrentTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
