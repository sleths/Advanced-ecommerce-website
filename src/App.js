import {useState} from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProductCardContainer from "./components/ProductCardContainer";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductCardContainer />
    </div>
  );
}

export default App;
