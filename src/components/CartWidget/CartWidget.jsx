import { Link } from "react-router-dom";
import "./CartWidget.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
  const { totalCantCarrito } = useContext(CartContext);
  let total = totalCantCarrito();

  return (
    <Link to="/cart">
      <div className="cartBox">
        <HiOutlineShoppingCart size={25} />
        <span className="counterCart">{total}</span>
      </div>
    </Link>
  );
}

export default CartWidget;
