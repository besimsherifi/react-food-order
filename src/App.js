import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {

  const [showCart, setShowCart] = useState(false);

  function openCart() {
    setShowCart(true);
  }

  function hideCart() {
    setShowCart(false);
  }

  return (
    <>
    {showCart && <Cart onClose={hideCart}></Cart>}
      <Header onShowCart={openCart}></Header>
      <main>
        <Meals/>
      </main>
    </>
  );
}

export default App;
