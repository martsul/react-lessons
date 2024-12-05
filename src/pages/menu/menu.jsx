import { ListInfo } from "../../components/list-info/list-info";
import { MenuListContainer } from "../../components/menu-list-item/menu-list-container";

export const Menu = ({ menu }) => {
  return <ListInfo title="menu" ids={menu} Element={MenuListContainer} />;
};
