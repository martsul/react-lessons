import { Layout } from "./components/layout/layout";
import { RestaurantsPage } from "./components/restaurants-page/restaurants-page";
import "./reset.css";
import "./fonts.css";
import "./root.css";

export const App = () => {
  return (
    <Layout>
      <RestaurantsPage />
    </Layout>
  );
};
