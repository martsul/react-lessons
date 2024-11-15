import { Count } from "../count/count";

export const RestaurantsMenu = ({ menu }) => {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {menu.map((dish) => (
          <li key={dish.id}>
            <span>{dish.name}</span>
            <br />
            <Count />
          </li>
        ))}
      </ul>
    </div>
  );
};
