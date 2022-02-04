import ProductHero from "../../components/ProductHero";
import SingleProductCard from "../../components/SingleProductCard";
import { headphones } from "../../utils/constants";

const Headphones = () => {
  return (
<>
<ProductHero title="Headphones"/>
<main className="product-page-container">
{headphones.map((product) => ( <SingleProductCard title={product.name} src={product.image.mobile} description={product.description}/>))}
</main>
</>
  );
};

export default Headphones;
