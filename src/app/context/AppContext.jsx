"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context for your provider
const AppContext = createContext();

// Create the provider component
export const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuItemClicked, setIsMenuItemClicked] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        setIsMenuItemClicked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Create a custom hook to consume the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
