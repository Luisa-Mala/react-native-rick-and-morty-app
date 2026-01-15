// lib/ColorSchemeContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { Appearance } from "react-native";
import storage from "./storage"; // Asumiendo que guardaste tu lógica de AsyncStorage aquí

const ColorSchemeContext = createContext();
const THEME_KEY = "user_theme_preference";

export const ColorSchemeProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState("system"); // 'light', 'dark', o 'system'
  const [isDarkMode, setIsDarkMode] = useState(
    Appearance.getColorScheme() === "dark"
  );

  useEffect(() => {
    // Cargar preferencia guardada al iniciar
    const loadSettings = async () => {
      const savedTheme = await storage.get(THEME_KEY);
      if (savedTheme) {
        handleThemeChange(savedTheme);
      }
    };
    loadSettings();

    // Escuchar cambios del sistema
    const subscription = Appearance.addChangeListener(
      ({ colorScheme: systemScheme }) => {
        if (colorScheme === "system") {
          setIsDarkMode(systemScheme === "dark");
        }
      }
    );

    return () => subscription.remove();
  }, [colorScheme]);

  const handleThemeChange = (theme) => {
    setColorScheme(theme);
    storage.save(THEME_KEY, theme);

    if (theme === "system") {
      setIsDarkMode(Appearance.getColorScheme() === "dark");
    } else {
      setIsDarkMode(theme === "dark");
    }
  };

  return (
    <ColorSchemeContext.Provider
      value={{
        colorScheme,
        isDarkMode,
        toggleScheme: handleThemeChange,
      }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
};

export const useColorScheme = () => useContext(ColorSchemeContext);
