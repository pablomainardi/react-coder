import "./App.css";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { Footer } from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
