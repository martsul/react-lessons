export const generateMetadata = async ({ params }) => {
  const { restaurantId } = await params;
  const { name } = await getRestaurantById(restaurantId);

  return {
    title: `Menu ${name}`,
    description: `Menu ${name}`,
  };
};

import { MenuPageContainer } from "../../../../content/menu-page/menu-page-container";
import { getRestaurantById } from "../../../../services/get-restaurant-by-id";

export default MenuPageContainer;
