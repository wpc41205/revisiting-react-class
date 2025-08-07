import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ProductCategory from "./components/ProductCategory.jsx";
import ProductHighlight from "./components/ProductHighlight.jsx";

function App() {
  return (
    <>
      <Navbar />
      <ProductHighlight />
      <ProductCategory />
      <Footer />
    </>
  );
}

export default App;
