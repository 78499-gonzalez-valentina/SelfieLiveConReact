import ItemlistContainer from "./ItemListContainer";
import Navbar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import ItemDetailContainer from "./ItemDetailContainer";


const App = () => {
  return (
    <div >
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<ItemlistContainer />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:cat" element={<ItemlistContainer />} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
