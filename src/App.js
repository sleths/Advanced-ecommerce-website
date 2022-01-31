import Navbar from "./components/Navbar"
import SharedArticleComponent from "./components/SharedArticleComponent";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/headphones" element={<Headphones/>}></Route>
      </Routes>
      <SharedArticleComponent />
      <Footer />
    </div>
  );
}

export default App;
