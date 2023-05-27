import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, agregado }) => {
  const [counter, setCounter] = useState(0);

  const sumar = () => {
    counter < stock && setCounter(counter + 1);
  };

  const restar = () => {
    counter > 0 && setCounter(counter - 1);
  };

  return (
    <div>
      <Counter
        counter={counter}
        sumar={sumar}
        restar={restar}
        agregado={agregado}
      />
    </div>
  );
};

export default CounterContainer;
