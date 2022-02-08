import Navbar from "./components/Navbar"
import SharedArticleComponent from "./components/SharedArticleComponent";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import ProductCardContainer from "./components/ProductCardContainer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/headphones" element={<Headphones/>}/>
        <Route path="/speakers" element={<Speakers/>}/>
        <Route path="/earphones" element={<Earphones/>}/>
        <Route path="/product/id" element={<Earphones/>}/>
      </Routes>
      <ProductCardContainer isOnEveryPage/>
      <SharedArticleComponent />
      <Footer />
    </div>
  );
}

export default App;
