import Navbar from "./components/Navbar"
import SharedArticleComponent from "./components/SharedArticleComponent";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import ProductCardContainer from "./components/ProductCardContainer";
import ProductPageLayout from "./components/ProductPageLayout";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div>
      <Navbar isOnProductPage={location.pathname.includes("product")} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/headphones" element={<Headphones/>}/>
        <Route path="/speakers" element={<Speakers/>}/>
        <Route path="/earphones" element={<Earphones/>}/>
        <Route path="/product/:id" element={<ProductPageLayout/>}/>
      </Routes>
      <ProductCardContainer isOnEveryPage/>
      <SharedArticleComponent />
      <Footer />
    </div>
  );
}

export default App;
