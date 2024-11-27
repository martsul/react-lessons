import { Layout } from "./components/layout/layout";
import { RestaurantsPage } from "./components/restaurants-page/restaurants-page";
import "./reset.css";
import "./fonts.css";
import "./root.css";
import { ThemeContextProvider } from "./components/theme-context/theme-context";

export const App = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <RestaurantsPage />
      </Layout>
    </ThemeContextProvider>
  );
};
