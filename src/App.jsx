import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";
import ContactContainer from "./components/ContactContainer/ContactContainer";
// import MainProducts from "./components/MainProducts/MainProducts";
// import Slideshow from "./components/Slideshow/Slideshow";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<ContactContainer />} />
          <Route path="/products" element={<ProductsContainer />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
