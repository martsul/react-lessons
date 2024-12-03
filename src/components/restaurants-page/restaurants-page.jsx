import { useState } from "react";
import { ReviewForm } from "../review-form/reviewForm";
import { ProgressBar } from "../progress-bar/progress-bar";
import styles from "./restaurants-page.module.css";
import { useSign } from "../sign-context/use-sign";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { RestaurantsCardsContainer } from "../restaurants-cards/restaurants-cards-container";
import { RestaurantsFiltersContainer } from "../restaurants-filters/restaurants-filters-container";

export const RestaurantsPage = () => {
  const { isLightTheme } = useTheme();

  const { signIn } = useSign();

  const restaurantsIds = useSelector(selectRestaurantsIds);

  const [availableRestaurant, setAvailableRestaurant] = useState(
    restaurantsIds[0]
  );

  const clickFunc = (event) => {
    const tempAvailableRestaurant = restaurantsIds.find(
      (restaurant) => restaurant == event.target.id
    );
    setAvailableRestaurant(tempAvailableRestaurant);
  };

  return (
    <main>
      <ProgressBar />
      <section
        className={classNames(styles.filters, { [styles.light]: isLightTheme })}
      >
        <div className={styles.filtersContainer}>
          {restaurantsIds.map((id) => (
            <RestaurantsFiltersContainer
              key={id}
              id={id}
              selectedRestaurant={availableRestaurant}
              clickFunc={clickFunc}
            />
          ))}
        </div>
      </section>
      <section>
        <div className={styles.container}>
          {availableRestaurant && (
            <RestaurantsCardsContainer id={availableRestaurant} />
          )}
          {signIn && <ReviewForm />}
        </div>
      </section>
    </main>
  );
};
