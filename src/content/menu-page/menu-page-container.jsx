import { getMenuByRestaurantId } from "../../services/get-menu-by-restaurant-id";
import { MenuPage } from "./menu-page";

export const MenuPageContainer = async ({ params }) => {
  const { restaurantId } = await params;

  const data = await getMenuByRestaurantId(restaurantId);

  return <MenuPage data={data} />;
};
