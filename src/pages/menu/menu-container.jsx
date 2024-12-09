import { useParams } from "react-router-dom";
import { Menu } from "./menu";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { useRequest } from "../../redux/hooks/use-request";
import { getMenu } from "../../redux/entities/menu/get-menu";
import { STATUS_PENDING, STATUS_REJECTED } from "../../redux/ui/request/request-slice";

export const MenuContainer = () => {
  const { restaurantId } = useParams();
  const requestStatus = useRequest(getMenu, restaurantId);

  const { menu } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (requestStatus == STATUS_PENDING) {
    return "Loading";
  }

  if (requestStatus == STATUS_REJECTED) {
    return "Error";
  }

  if (!menu) {
    return;
  }

  return <Menu menu={menu} />;
};
