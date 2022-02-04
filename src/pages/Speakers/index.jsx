import ProductHero from "../../components/ProductHero";
import SingleProductCard from "../../components/SingleProductCard";
import { speakers } from "../../utils/constants";

const Speakers = () => {
  return (
    <>
      <ProductHero title="Speakers" />
      <main className="product-page-container">
        {speakers.map((product) => (
          <SingleProductCard
            title={product.name}
            src={product.image.desktop}
            description={product.description}
            key={product.id}
          />
        ))}
      </main>
    </>
  );
};

export default Speakers;
