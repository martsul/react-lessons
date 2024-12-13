import { Layout } from "./components/layout/layout";
import { PreviewRestaurantsPage } from "./pages/preview-restaurants-page/preview-restaurants-page";
import "./reset.css";
import "./fonts.css";
import "./root.css";
import { ThemeContextProvider } from "./components/theme-context/theme-context";
import { SignContextProvider } from "./components/sign-context/sign-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RestaurantPage } from "./pages/restaurant-page/restaurant-page";
import { HomePage } from "./pages/home-page/home-page";
import { MenuContainer } from "./pages/menu/menu-container";
import { ReviewsContainer } from "./pages/reviews/reviews-container";
import { DishContainer } from "./pages/dish/dish-container";
import { EditReviewContextProvider } from "./components/edit-review-context/edit-review-context";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "restaurants",
          element: <PreviewRestaurantsPage />,
          children: [
            {
              path: ":restaurantId",
              element: <RestaurantPage />,
              children: [
                {
                  index: true,
                  element: <MenuContainer />,
                },
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
          path: "dish/:dishId",
          element: <DishContainer />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <SignContextProvider>
          <EditReviewContextProvider>
            <RouterProvider router={router} />
          </EditReviewContextProvider>
        </SignContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
