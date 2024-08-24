"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context for your provider
const AppContext = createContext();

// Create the provider component
export const AppProvider = ({ children }) => {
  // Define your states here
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (isMenuOpen) {
      // Save the current scroll position
      setScrollPosition(window.pageYOffset);

      // Lock the body scroll
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.pageYOffset}px`;
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
    } else {
      // Restore the scroll position
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflowY = "scroll";
      document.body.style.width = "";
      window.scrollTo(0, scrollPosition);
    }
  }, [isMenuOpen, scrollPosition]);

  // Provide the states and functions to the children components
  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
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
