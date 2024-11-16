import { RestaurantsMenu } from "../restaurants-menu/restaurants-menu";
import { RestaurantsReviews } from "../restaurants-reviews/restaurants-reviews";

export const RestaurantsCard = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      {Boolean(menu.length) && <RestaurantsMenu menu={menu} />}
      {Boolean(reviews.length) && <RestaurantsReviews reviews={reviews} />}
    </div>
  );
};
