import { React } from "react";

import "./Cart.css";
import { Button } from "@mui/material";

const Cart = ({ cart, vaciarCarrito, eliminarProducto, total }) => {
  return (
    <div className="cardCart">
      <h3>Mi Carrito</h3>

      {cart.map((e) => {
        return (
          <div className="itemsCart" key={e.id}>
            <div className="cardItemCart">
              <h4>{e.titulo}</h4>
              <h6>$ {e.precio}</h6>
              <h6>Unidades: {e.quantity}</h6>
            </div>
            <div>
              <Button
                variant="contained"
                onClick={() => eliminarProducto(e.id)}
              >
                Eliminar
              </Button>
            </div>
          </div>
        );
      })}

      <Button variant="contained" onClick={vaciarCarrito}>
        Vaciar Carrito
      </Button>
      <div>
        <h1>Total del carrito $ {total}</h1>
      </div>
    </div>
  );
};

export default Cart;
