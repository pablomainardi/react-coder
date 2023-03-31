import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  let greeting = "Listado de hoy";

  return <ItemList greeting={greeting} />;
};
