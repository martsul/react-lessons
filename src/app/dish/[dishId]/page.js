export const generateMetadata = async ({ params }) => {
  const { dishId } = await params;
  const { name } = await getDishById(dishId);

  return {
    title: name,
    description: name,
  };
};

import { DishPage } from "../../../content/dish-page/dish-page";
import { getDishById } from "../../../services/get-dish-by-id";

export default DishPage;
