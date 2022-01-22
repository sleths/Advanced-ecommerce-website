import {useState} from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProductCardContainer from "./components/ProductCardContainer";
import HomeAdComponent from "./components/HomeAdComponent";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductCardContainer />
      <HomeAdComponent />
    </div>
  );
}

export default App;
