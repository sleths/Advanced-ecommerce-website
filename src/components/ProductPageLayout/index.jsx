import { useParams } from "react-router";
import data from "../../data.json";

const ProductPageLayout = () => {
  const { id } = useParams();
  const product = data.find((product) => product.id === +id);
  return (
    <>
    {product === undefined ? (
      <div>The page is not found.</div>
    ): ( <div>ProductPageContainer</div>)}
    </>
  )
}

export default ProductPageLayout;