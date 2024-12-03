import { Layout } from "./components/layout/layout";
import { RestaurantsPage } from "./components/restaurants-page/restaurants-page";
import "./reset.css";
import "./fonts.css";
import "./root.css";
import { ThemeContextProvider } from "./components/theme-context/theme-context";
import { SignContextProvider } from "./components/sign-context/sign-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Restaurant } from "./components/restaurant/restaurant";
import { HomePage } from "./components/home-page/home-page";
import { MenuContainer } from "./components/menu/menu-container";
import { ReviewsContainer } from "./components/reviews/reviews-container";
import { DishContainer } from "./components/dish/dish-container";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <HomePage />
        </Layout>
      ),
    },
    {
      path: "restaurant",
      element: (
        <Layout>
          <RestaurantsPage />
        </Layout>
      ),
      children: [
        {
          path: ":restaurantId",
          element: <Restaurant />,
          children: [
            {
              path: "menu",
              element: <MenuContainer />,
            },
            {
              path: "reviews",
              element: <ReviewsContainer />,
            },
          ],
        },
      ],
    },
    {
      path: "dish/:menuId",
      element: (
        <Layout>
          <DishContainer />
        </Layout>
      ),
    },
  ]);

  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <SignContextProvider>
          <RouterProvider router={router} />
        </SignContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
