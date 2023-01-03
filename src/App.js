import { useState } from "react";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
// import Modal from "./components/UI/Modal";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";
function App() {
  const [cartState,setCartState]=useState(true);
  const cartHanderl= event=>{
    setCartState(false);
  }
  const closeCart=()=>{
    setCartState(true);
  }
  return (
    <CartContextProvider>
      {!cartState &&<Cart close={closeCart}/>}
      <Header openC={cartHanderl}></Header>
      <Meals/>
    </CartContextProvider>
  );
}

export default App;
