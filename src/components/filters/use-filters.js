import { useState } from "react";
import { restaurants } from "../../mock-constants/mock";

export const useFilters = () => {
  const [available, setAvailable] = useState(restaurants);

  const clickFunc = (event) => {
    const tempAvailable = [
      ...restaurants.filter((restaurant) => restaurant.id == event.target.id),
    ];

    setAvailable(tempAvailable);
  };

  return {
    available,
    clickFunc,
  };
};
