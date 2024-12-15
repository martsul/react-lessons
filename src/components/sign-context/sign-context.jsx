import { useState } from "react";
import { SignContext } from ".";

export const SignContextProvider = ({ children }) => {
  const [sign, setSign] = useState(false);

  const changeSign = () => {
    setSign(!sign);
  };

  return (
    <SignContext.Provider
      value={{
        clickCallback: changeSign,
        signIn: sign,
        name: "User",
        userId: "a304959a-76c0-4b34-954a-b38dbf310360",
      }}
    >
      {children}
    </SignContext.Provider>
  );
};
