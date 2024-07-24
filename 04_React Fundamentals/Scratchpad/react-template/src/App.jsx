import Profile from "./components/Profile";
import Product from "./components/Product";
import "./App.css";

function App() {
  return (
    <>
      <Profile name="Doge" job="Nuclear Physicist" birthdate="2000" />
      <Product name="Electric Fan" description="It spins" price={25} />
      <Product name="Vacuum" description="It vacuums" price={100} />
    </>
  );
}

export default App;
