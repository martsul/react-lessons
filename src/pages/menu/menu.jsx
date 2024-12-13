import { ListInfo } from "../../components/list-info/list-info";
import { MenuListContainer } from "../../components/menu-list-item/menu-list-container";

export const Menu = ({ data }) => {
  return <ListInfo title="menu" data={data} Element={MenuListContainer} />;
};
