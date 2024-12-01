import { useSelector } from "react-redux";
import { selectMenuById } from "../../redux/entities/menu/menu-slice";
import { MenuListItem } from "./menu-list-item";

export const MenuListContainer = ({ id }) => {
  const dish = useSelector((state) => selectMenuById(state, id));

  if (!dish) {
    return;
  }

  const { name, price, ingredients } = dish;

  return <MenuListItem name={name} price={price} ingredients={ingredients} />;
};
