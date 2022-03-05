import ProductHero from "../../components/ProductHero";
import SingleProductCard from "../../components/SingleProductCard";
import { earphones } from "../../utils/constants";
import LikeComponent from "../../components/LikeComponent";

const Earphones = () => {
  return (
    <>
    <ProductHero title="Earphones"/>
    <main className="product-page-container">
      {earphones.map((product) => (
        <SingleProductCard 
        title={product.name}
        description={product.description}
        src={product.image.desktop}
        key={product.id}
        />
      ))}

    </main>
    <LikeComponent />
    </>
);
};

export default Earphones;
