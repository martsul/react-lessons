import { useState } from "react";
import { restaurants } from "../../mock-constants/mock";
import { Filters } from "../filters/filters";
import { RestaurantsCard } from "../restaurants-cards/restaurants-cards";
import { ReviewForm } from "../review-form/reviewForm";
import { ProgressBar } from "../progress-bar/progress-bar";

export const RestaurantsPage = () => {
  const [available, setAvailable] = useState(restaurants[0]);

  const clickFunc = (event) => {
    const tempAvailable = restaurants.find(
      (restaurant) => restaurant.id == event.target.id
    );

    setAvailable(tempAvailable);
  };

  return (
    <main>
      <ProgressBar />
      <section>
        <Filters filters={restaurants} clickFunc={clickFunc} />
      </section>
      <section>
        {available && <RestaurantsCard restaurant={available} />}
        <ReviewForm />
        {available && <RestaurantsCard restaurant={available} />}
        <ReviewForm />
        {available && <RestaurantsCard restaurant={available} />}
        <ReviewForm />
        {available && <RestaurantsCard restaurant={available} />}
        <ReviewForm />
        {available && <RestaurantsCard restaurant={available} />}
        <ReviewForm />
      </section>
    </main>
  );
};
