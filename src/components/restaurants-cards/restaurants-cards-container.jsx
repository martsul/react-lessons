import { RestaurantsCard } from "./restaurants-cards";

export const RestaurantsCardsContainer = async ({
  children,
  activeRestaurant,
}) => {
  return (
    <RestaurantsCard name={activeRestaurant.name}>{children}</RestaurantsCard>
  );
};
