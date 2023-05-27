import React, { useState, useEffect, useContext } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { agregarCarrito } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id === +id);
    setProduct(encontrado);
  }, [id]);

  const agregado = (cant) => {
    console.log(`Se agregó ${cant} unidad/es.`);
    let data = {
      ...product,
      quantity: cant,
    };
    agregarCarrito(data);
  };

  return (
    <div>
      <ItemDetail product={product} agregado={agregado} />
    </div>
  );
};
