import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const estaEnCarrito = (id) => {
    let esta = cart.some((e) => e.id === id);
    return esta;
  };

  const agregarCarrito = (product) => {
    let esta = estaEnCarrito(product.id);
    if (esta) {
      let nuevoCarrito = cart.map((e) => {
        if (e.id === product.id) {
          return { ...e, quantity: e.quantity + product.quantity };
        } else {
          return e;
        }
      });
      setCart(nuevoCarrito);
    } else {
      setCart([...cart, product]);
    }
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const eliminarProducto = (id) => {
    const prodFilter = cart.filter((e) => e.id !== id);
    setCart(prodFilter);
  };

  const totalPrecioCarrito = () => {
    let total = cart.reduce((acc, e) => {
      return acc + e.precio * e.quantity;
    }, 0);
    return total;
  };

  const totalCantCarrito = ()=>{
    let total = cart.reduce((acc, e) => {
      return acc + e.quantity;
    }, 0);
    return total;
  }

  let data = {
    cart,
    agregarCarrito,
    vaciarCarrito,
    eliminarProducto,
    totalPrecioCarrito,
    totalCantCarrito
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
