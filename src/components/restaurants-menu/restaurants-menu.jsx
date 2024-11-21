import { MenuListItem } from "../menu-list-item/menu-list-item";

export const RestaurantsMenu = ({ menu }) => {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {menu.map((dish) => (
          <MenuListItem dish={dish} key={dish.id} />
        ))}
      </ul>
    </div>
  );
};
