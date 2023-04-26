import "./CartWidget.css";
import { HiOutlineShoppingCart } from "react-icons/hi";

function CartWidget() {
  return (
    <div className="cartBox">
      <HiOutlineShoppingCart size={25} />
      <span className="counterCart">0</span>
    </div>
  );
}

export default CartWidget;
