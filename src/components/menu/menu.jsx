import { ListInfo } from "../list-info/list-info";
import { MenuListContainer } from "../menu-list-item/menu-list-container";

export const Menu = ({ menu }) => {
  return <ListInfo title="menu" ids={menu} Element={MenuListContainer} />;
};
