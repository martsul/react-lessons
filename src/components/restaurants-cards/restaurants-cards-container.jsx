import { useParams } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import { RestaurantsCard } from "./restaurants-cards";

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

  return <RestaurantsCard name={data.name}>{children}</RestaurantsCard>;
};
