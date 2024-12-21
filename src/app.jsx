import "./reset.css";
import "./fonts.css";
import "./root.css";
import { ThemeContextProvider } from "./components/theme-context/theme-context";
import { SignContextProvider } from "./components/sign-context/sign-context";
import { EditReviewContextProvider } from "./components/edit-review-context/edit-review-context";
import { ReduxProvider } from "./components/redux-provider/redux-provider";

const App = ({ children }) => {
  return (
    <ReduxProvider>
      <ThemeContextProvider>
        <SignContextProvider>
          <EditReviewContextProvider>{children}</EditReviewContextProvider>
        </SignContextProvider>
      </ThemeContextProvider>
    </ReduxProvider>
  );
};

export default App;
