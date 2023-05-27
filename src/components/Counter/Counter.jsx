import { Button } from "@mui/material";
import "./Counter.css";

const Counter = ({ sumar, restar, counter, agregado }) => {
  return (
    <div className="btnCount">
      <div>
        <Button variant="contained" onClick={sumar}>
          Sumar
        </Button>
        <h3>{counter}</h3>
        <Button variant="contained" onClick={restar}>
          Restar
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          onClick={() => {
            agregado(counter);
          }}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default Counter;
