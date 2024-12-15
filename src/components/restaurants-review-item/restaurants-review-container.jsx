import { RestaurantsReviewItem } from "./restaurants-review-item";
import { useGetUsersQuery } from "../../redux/services/api";
import { useSign } from "../sign-context/use-sign";

export const RestaurantsReviewContainer = ({ parameters }) => {
  const { text, userId, rating, id } = parameters;
  const { userId: authorizedUser } = useSign();
  const isReviewChanging = userId === authorizedUser;

  const {
    data: user,
    isLoading,
    isError,
  } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id: id }) => {
        return id == userId;
      }),
    }),
  });

  if (isLoading) {
    return "Loading";
  }

  if (isError) {
    return "Error";
  }

  if (!user) {
    return;
  }

  return (
    <RestaurantsReviewItem
      isReviewChanging={isReviewChanging}
      text={text}
      rating={rating}
      id={id}
      userName={user.name}
    />
  );
};
