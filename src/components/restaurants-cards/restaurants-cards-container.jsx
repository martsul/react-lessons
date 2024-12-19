"use client";

import { useGetRestaurantsQuery } from "../../redux/services/api";
import { RestaurantsCard } from "./restaurants-cards";
import { useParams } from "next/navigation";

export const RestaurantsCardsContainer = ({ children }) => {
  const { restaurantId } = useParams();

  const { data, isError, isLoading } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id: id }) => restaurantId == id),
    }),
  });

  if (isError) {
    return "Error";
  }

  if (isLoading) {
    return "Loading";
  }

  if (!data) {
    return;
  }

  return (
    <RestaurantsCard restaurantId={restaurantId} name={data.name}>
      {children}
    </RestaurantsCard>
  );
};
