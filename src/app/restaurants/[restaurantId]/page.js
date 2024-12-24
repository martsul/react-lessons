import { getRestaurantById } from "../../../services/get-restaurant-by-id";

export const generateMetadata = async ({ params }) => {
  const { restaurantId } = await params;
  const { name } = await getRestaurantById(restaurantId);

  return { title: name, description: name };
};

import { MenuPageContainer } from "../../../content/menu-page/menu-page-container";

export default MenuPageContainer;
