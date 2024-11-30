import { useState } from "react";
import { ThemeContext } from ".";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  function changeTheme() {
    setTheme(!theme);
  }

  return (
    <ThemeContext.Provider value={{ changeTheme, isLightTheme: theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
