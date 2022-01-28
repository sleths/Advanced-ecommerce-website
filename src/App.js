import Navbar from "./components/Navbar"
import SharedArticleComponent from "./components/SharedArticleComponent";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <SharedArticleComponent />
      <Footer />
    </div>
  );
}

export default App;
