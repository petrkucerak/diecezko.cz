"use client";
import { createContext, useState } from "react";

const SwitcherContext = createContext();

export const SwitcherProvider = ({ children }) => {
  const [switcher, setSwitcher] = useState(0);
  return (
    <SwitcherContext.Provider value={{ switcher, setSwitcher }}>
      {children}
    </SwitcherContext.Provider>
  );
};

export default SwitcherContext;
