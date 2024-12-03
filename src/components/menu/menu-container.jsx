import { useParams } from "react-router-dom";
import { Menu } from "./menu";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";

export const MenuContainer = () => {
  const { restaurantId } = useParams();
  const { menu } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!menu) {
    return;
  }

  return <Menu menu={menu} />;
};
