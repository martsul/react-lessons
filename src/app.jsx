"use client";

import "./reset.css";
import "./fonts.css";
import "./root.css";
import { ThemeContextProvider } from "./components/theme-context/theme-context";
import { SignContextProvider } from "./components/sign-context/sign-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { EditReviewContextProvider } from "./components/edit-review-context/edit-review-context";

const App = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <SignContextProvider>
          <EditReviewContextProvider>{children}</EditReviewContextProvider>
        </SignContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};

export default App;
