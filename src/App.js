import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { Footer } from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
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
            <Route path="*" element={<h3>Ruta Inexistente</h3>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
