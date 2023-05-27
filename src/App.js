import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { Footer } from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import CartContainer from "./components/Cart/CartContainer";
import Form from "./components/Form/Form";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Navbar />}>
            <Route element={<Footer />}>
              <Route
                path="/"
                element={
                  <>
                    <Home /> <ItemListContainer />
                  </>
                }
              />
              <Route
                path="/category/:categoryName"
                element={<ItemListContainer />}
              />
              <Route path="/category/todos" element={<ItemListContainer />} />
              <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/form" element={<Form />} />
              <Route path="*" element={<h3>Ruta Inexistente</h3>} />
            </Route>
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
