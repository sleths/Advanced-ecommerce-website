import ProductHero from "../../components/ProductHero";
import SingleProductCard from "../../components/SingleProductCard";
import { headphones } from "../../utils/constants";

const Headphones = () => {
  return (
<>
<ProductHero title="Headphones"/>
{headphones.map((product) => ( <SingleProductCard title={product.name} src={product.image.mobile} description={product.description}/>))}
</>
  );
};

export default Headphones;
