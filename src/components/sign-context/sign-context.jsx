import { useState } from "react";
import { SignContext } from ".";

export const SignContextProvider = ({ children }) => {
  const [sign, setSign] = useState(false);

  const changeSign = () => {
    setSign(!sign);
  };

  return (
    <SignContext.Provider
      value={{ clickCallback: changeSign, signIn: sign, name: "User" }}
    >
      {children}
    </SignContext.Provider>
  );
};
