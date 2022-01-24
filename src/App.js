import {useState} from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProductCardContainer from "./components/ProductCardContainer";
import HomeAdComponent from "./components/HomeAdComponent";
import SharedArticleComponent from "./components/SharedArticleComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductCardContainer />
      <HomeAdComponent />
      <SharedArticleComponent />
      <Footer />
    </div>
  );
}

export default App;
