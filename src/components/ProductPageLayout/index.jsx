import { useParams } from "react-router";
import data from "../../data.json";
import SeeProductBtn from "../SeeProductBtn";
import styles from "./style.module.scss";

const ProductPageLayout = () => {
  const { id } = useParams();
  const product = data.find((product) => product.id === +id);
  return (
    <>
    {product === undefined ? (
      <div>The page is not found.</div>
    ): ( 
    <div className="container">
      <div className={styles.productContainer}>
        <img src={product.image.desktop} alt={product.id} />
        <section className={styles.textContainer}>
          <h3>{product.name}</h3>
          <p className={styles.text}>{product.description}</p>
          <p className={styles.priceText}><strong>{`$ ${product.price}`}</strong></p>
          <SeeProductBtn title="Add To Cart" type="orange"/>
        </section>
      </div>
    </div>)}
    </>
  )
}

export default ProductPageLayout;