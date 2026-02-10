import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "El Carlo"),
    React.createElement(Pizza, {
      name: "The Chicken Texas BBQ Pizza",
      description:
        "Chicken, BBQ sauce, red onions, and cilantro on a crispy crust.",
    }),
    React.createElement(Pizza, {
      name: "The Margherita Pizza",
      description: "Fresh mozzarella, tomatoes, and basil on a thin crust.",
    }),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description:
        "Pepperoni, mozzarella cheese, and tomato sauce on a thick crust.",
    }),
    React.createElement(Pizza, {
      name: "The Veggie Supreme Pizza",
      description:
        "Bell peppers, onions, mushrooms, olives, and tomatoes on a whole wheat crust.",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
