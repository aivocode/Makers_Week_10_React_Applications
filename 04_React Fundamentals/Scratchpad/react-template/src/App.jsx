
import Profile from "./components/Profile";
import Product from "./components/Product";
import Recipe from "./components/Recipe";
import Counter from "./components/Counter";

import "./App.css";

function App() {
  return (
    <>
      <Counter />
      <Counter />
      <Profile name="Doge" job="Nuclear Physicist" birthdate="2000" />

      <Product name="Electric Fan" description="It spins" price={25} />
      <Product name="Vacuum" description="It vacuums" price={100} />

      <Recipe title="Finnish cinnamon buns" type="dessert" duration={60} />
    </>
  );
}

export default App;
