import { DishContainer } from "../../components/dish/dish-container";
import { getDishById } from "../../services/get-dish-by-id";

export const DishPage = async ({ params }) => {
  const { dishId } = await params;

  const data = await getDishById(dishId);

  return <DishContainer data={data} dishId={dishId} />;
};
