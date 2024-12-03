import { Layout } from "./components/layout/layout";
import { RestaurantsPage } from "./components/restaurants-page/restaurants-page";
import "./reset.css";
import "./fonts.css";
import "./root.css";
import { ThemeContextProvider } from "./components/theme-context/theme-context";
import { SignContextProvider } from "./components/sign-context/sign-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <SignContextProvider>
          <Layout>
            <RestaurantsPage />
          </Layout>
        </SignContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
