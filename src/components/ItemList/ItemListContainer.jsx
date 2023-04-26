import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  let greeting = "Listado de hoy";

  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    const prodFiltrados = products.filter(
      (prod) => prod.categoria === categoryName
    );
    console.log("------prod filtrado");
    console.log({ prodFiltrados });
    const task = new Promise((resolve, reject) => {
      resolve(categoryName ? prodFiltrados : products);
    });

    task.then((res) => setItems(res));

    task.catch((err) => console.log(err));
  }, [categoryName]);

  return <ItemList items={items} greeting={greeting} />;
};
