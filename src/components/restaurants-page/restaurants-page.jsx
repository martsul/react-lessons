import { restaurants } from "../../mock-constants/mock";
import { Filters } from "../filters/filters";
import { useFilters } from "../filters/use-filters";
import { RestaurantsCard } from "../restaurants-cards/restaurants-cards";

export const RestaurantsPage = () => {
  const { available, clickFunc } = useFilters();

  return (
    <main>
      <section>
        <Filters filters={restaurants} clickFunc={clickFunc} />
      </section>
      <section>
        {available.map((restaurant) => (
          <RestaurantsCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </section>
    </main>
  );
};
