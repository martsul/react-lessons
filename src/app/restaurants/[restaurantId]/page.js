import { getRestaurantById } from "../../../services/get-restaurant-by-id";
import { MenuPageContainer } from "../../../content/menu-page/menu-page-container";

export const generateMetadata = async ({ params }) => {
  const { restaurantId } = await params;
  const { name } = await getRestaurantById(restaurantId);

  return { title: name, description: name };
};

export default MenuPageContainer;
