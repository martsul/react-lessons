import { useState } from "react";
import { restaurants } from "../../mock-constants/mock";
import { Filters } from "../filters/filters";
import { RestaurantsCard } from "../restaurants-cards/restaurants-cards";
import { ReviewForm } from "../review-form/reviewForm";
import { ProgressBar } from "../progress-bar/progress-bar";
import styles from "./restaurants-page.module.css";
import classNames from "classnames";

export const RestaurantsPage = () => {
  const [available, setAvailable] = useState(restaurants[0]);

  const clickFunc = (event) => {
    const tempAvailable = restaurants.find(
      (restaurant) => restaurant.id == event.target.id
    );

    setAvailable(tempAvailable);
  };

  return (
    <main style={{ font: "400 14px/1.2 Gilroy, sanserif" }}>
      <ProgressBar />
      <Filters
        filters={restaurants}
        selectedRestaurant={available.id}
        clickFunc={clickFunc}
      />
      <section>
        <div className={classNames(styles["container"])}>
          {available && <RestaurantsCard restaurant={available} />}
          {available && <RestaurantsCard restaurant={available} />}
          {available && <RestaurantsCard restaurant={available} />}
          <ReviewForm />
        </div>
      </section>
    </main>
  );
};
