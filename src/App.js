import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {

  const [showCart, setShowCart] = useState(false);

  function openCart() {
    setShowCart(true);
  }

  function hideCart() {
    setShowCart(false);
  }

  return (
    <CartProvider>
    {showCart && <Cart onClose={hideCart}></Cart>}
      <Header onShowCart={openCart}></Header>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
