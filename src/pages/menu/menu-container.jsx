"use client";

import { Menu } from "./menu";
import { useGetMenuByRestaurantIdQuery } from "../../redux/services/api";
import { useParams } from "next/navigation";

export const MenuContainer = () => {
  const { restaurantId } = useParams();

  const { data, isError, isLoading } =
    useGetMenuByRestaurantIdQuery(restaurantId);

  if (isError) {
    return "Error";
  }

  if (isLoading) {
    return "Loading";
  }

  if (!data) {
    return;
  }

  return <Menu data={data} />;
};
