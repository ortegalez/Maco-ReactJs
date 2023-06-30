import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import MainProducts from "./components/MainProducts/MainProducts";
import Navbar from "./components/Navbar/Navbar";
import Slideshow from "./components/Slideshow/Slideshow";

function App() {
  return (
    <>
      <Navbar />
      {/* <Main /> */}
      <Slideshow />
      <MainProducts />
      <Footer />
    </>
  );
}

export default App;
