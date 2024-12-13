import { useParams } from "react-router-dom";
import { Menu } from "./menu";
import { useGetMenuByRestaurantIdQuery } from "../../redux/services/api";

export const MenuContainer = () => {
  const { restaurantId } = useParams();

  const { data, isError, isLoading } =
    useGetMenuByRestaurantIdQuery(restaurantId);

  if (isError) {
    return "Error";
  }

  if (isLoading) {
    return "Loading";
  }

  if (!data) {
    return;
  }

  return <Menu data={data} />;
};
