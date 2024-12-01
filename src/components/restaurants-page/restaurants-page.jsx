import { useState } from "react";
import { RestaurantsCard } from "../restaurants-cards/restaurants-cards";
import { ReviewForm } from "../review-form/reviewForm";
import { ProgressBar } from "../progress-bar/progress-bar";
import styles from "./restaurants-page.module.css";
import { useSign } from "../sign-context/use-sign";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice";
import { FilterContainer } from "../filters/filter-container";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  const { signIn } = useSign();

  const [availableRestaurant, setAvailableRestaurant] = useState(
    restaurantsIds[0]
  );

  const clickFunc = (event) => {
    const tempAvailableRestaurant = restaurantsIds.find(
      (restaurant) => {
        // console.log(restaurant);
        console.log(restaurant);
        
        

        return restaurant == event.target.id
      }
    );

    setAvailableRestaurant(tempAvailableRestaurant);
  };

  return (
    <main>
      <ProgressBar />
      <section className={styles.section}>
        <div className={styles.container}>
          {restaurantsIds.map((id) => (
            <FilterContainer
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
            <RestaurantsCard id={availableRestaurant} />
          )}
          {signIn && <ReviewForm />}
        </div>
      </section>
    </main>
  );
};
