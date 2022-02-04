import Hero from "../../components/Hero";
import ProductCardContainer from "../../components/ProductCardContainer";
import HomeAdComponent from "../../components/HomeAdComponent";

const Home = () => {
  return (
    <main className="hideIsOnEveryPage">
    <Hero />
    <ProductCardContainer />
    <HomeAdComponent />
    </main>
  );
};

export default Home;