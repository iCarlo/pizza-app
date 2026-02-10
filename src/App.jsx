import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>El Carlo</h1>
      <Pizza
        name="The Chicken Texas BBQ Pizza"
        description="Chicken, BBQ sauce, red onions, and cilantro on a crispy crust."
        image="/public/pizzas/bbq_ckn.webp"
      />
      <Pizza
        name="The Margherita Pizza"
        description="Fresh mozzarella, tomatoes, and basil on a thin crust."
        image="/public/pizzas/mexicana.webp"
      />
      <Pizza
        name="The Pepperoni Pizza"
        description="Pepperoni, mozzarella cheese, and tomato sauce on a thick crust."
        image="/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name="The Veggie Supreme Pizza"
        description="Bell peppers, onions, mushrooms, olives, and tomatoes on a whole wheat crust."
        image="/public/pizzas/veggie_veg.webp"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
