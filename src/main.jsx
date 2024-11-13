import { createRoot } from "react-dom/client";
import { createElement } from "react";
import { restaurants } from "./mock-constants/mock";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

reactRoot.render(
<div>
  <div id={restaurants[0].id}>
    <h2>{restaurants[0].name}</h2>
    <h3>Меню</h3>
    <ul>
      <li id={restaurants[0].menu[0].id}>{restaurants[0].menu[0].name}</li>
      <li id={restaurants[0].menu[1].id}>{restaurants[0].menu[1].name}</li>
      <li id={restaurants[0].menu[2].id}>{restaurants[0].menu[2].name}</li>
    </ul>
    <h3>Отзывы</h3>
    <ul>
      <li id={restaurants[0].reviews[0].id}>{restaurants[0].reviews[0].text}</li>
      <li id={restaurants[0].reviews[1].id}>{restaurants[0].reviews[1].text}</li>
    </ul>
  </div>
  <div id={restaurants[1].id}>
    <h2>{restaurants[1].name}</h2>
    <h3>Меню</h3>
    <ul>
      <li id={restaurants[1].menu[0].id}>{restaurants[1].menu[0].name}</li>
      <li id={restaurants[1].menu[1].id}>{restaurants[1].menu[1].name}</li>
    </ul>
    <h3>Отзывы</h3>
    <ul>
      <li id={restaurants[1].reviews[0].id}>{restaurants[1].reviews[0].text}</li>
      <li id={restaurants[1].reviews[1].id}>{restaurants[1].reviews[1].text}</li>
      <li id={restaurants[1].reviews[2].id}>{restaurants[1].reviews[2].text}</li>
    </ul>
  </div>
  <div id={restaurants[2].id}>
    <h2>{restaurants[2].name}</h2>
    <h3>Меню</h3>
    <ul>
      <li id={restaurants[2].menu[0].id}>{restaurants[2].menu[0].name}</li>
      <li id={restaurants[2].menu[1].id}>{restaurants[2].menu[1].name}</li>
      <li id={restaurants[2].menu[2].id}>{restaurants[2].menu[2].name}</li>
    </ul>
    <h3>Отзывы</h3>
    <ul>
      <li id={restaurants[2].reviews[0].id}>{restaurants[2].reviews[0].text}</li>
    </ul>
  </div>
  <div id={restaurants[3].id}>
    <h2>{restaurants[3].name}</h2>
    <h3>Меню</h3>
    <ul>
      <li id={restaurants[3].menu[0].id}>{restaurants[3].menu[0].name}</li>
      <li id={restaurants[3].menu[1].id}>{restaurants[3].menu[1].name}</li>
    </ul>
    <h3>Отзывы</h3>
    <ul>
      <li id={restaurants[3].reviews[0].id}>{restaurants[3].reviews[0].text}</li>
      <li id={restaurants[3].reviews[1].id}>{restaurants[3].reviews[1].text}</li>
    </ul>
  </div>
</div>
);
