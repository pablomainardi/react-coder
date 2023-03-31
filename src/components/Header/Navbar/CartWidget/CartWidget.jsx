import "./CartWidget.css";

function CartWidget() {
  return (
    <div className="cartBox">
      <img width="25px" src="./carro.png" alt="" srcset="" />
      <span className="counterCart">0</span>
    </div>
  );
}

export default CartWidget;
