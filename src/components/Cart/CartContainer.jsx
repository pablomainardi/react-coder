import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { cart, vaciarCarrito, eliminarProducto, totalPrecioCarrito } =
    useContext(CartContext);
  let total = totalPrecioCarrito();
  return (
    <div>
      <Cart
        cart={cart}
        vaciarCarrito={vaciarCarrito}
        eliminarProducto={eliminarProducto}
        total={total}
      />
    </div>
  );
};

export default CartContainer;
