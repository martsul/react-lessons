import { ListInfo } from "../../components/list-info/list-info";
import { MenuListItem } from "../../components/menu-list-item/menu-list-item";

export const MenuPage = ({ data }) => {
  return (
    <ListInfo title="menu">
      {data.map((dish) => (
        <MenuListItem key={dish.id} dish={dish} />
      ))}
    </ListInfo>
  );
};
