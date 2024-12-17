"use client"

import { RestaurantsCardsContainer } from "../../components/restaurants-cards/restaurants-cards-container";

export const RestaurantPage = ({children}) => {
  return (
    <RestaurantsCardsContainer>
      {children}
    </RestaurantsCardsContainer>
  );
};
