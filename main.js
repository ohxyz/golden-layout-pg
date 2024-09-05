import { GoldenLayout } from "golden-layout";
import "./style.css";
import "golden-layout/dist/css/goldenlayout-base.css";
import "golden-layout/dist/css/themes/goldenlayout-dark-theme.css";

class MyComponent {
  constructor(container) {
    this.rootElement = container.element;
    this.rootElement.innerHTML =
      "<h2>" + "Component Type: MyComponent" + "</h2>";
    this.resizeWithContainerAutomatically = true;
  }
}

const myLayout = {
  root: {
    type: "row",
    content: [
      {
        title: "My Component 1",
        type: "component",
        componentType: "MyComponent",
        width: 50,
      },
      {
        title: "My Component 2",
        type: "component",
        componentType: "MyComponent",
        // componentState: { text: 'Component 2' }
      },
    ],
  },
};

const menuContainerElement = document.querySelector("#menuContainer");
const addMenuItemElement = document.querySelector("#addMenuItem");
const layoutElement = document.querySelector("#layoutContainer");

addMenuItemElement.addEventListener("click", (event) => {
  goldenLayout.addComponent("MyComponent", undefined, "Added Component");
});

const goldenLayout = new GoldenLayout(layoutElement);

goldenLayout.registerComponentConstructor("MyComponent", MyComponent);

goldenLayout.loadLayout(myLayout);
