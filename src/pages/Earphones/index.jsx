import ProductHero from "../../components/ProductHero";
import SingleProductCard from "../../components/SingleProductCard";
import { earphones } from "../../utils/constants";

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
    </>
);
};

export default Earphones;
