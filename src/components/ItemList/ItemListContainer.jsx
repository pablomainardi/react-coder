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
    let prodFiltrados = products.filter(
      (prod) => prod.categoria === categoryName
    );

    setItems(prodFiltrados);
  }, [categoryName]);

  console.log(items);

  return <ItemList items={items} greeting={greeting} />;
};
