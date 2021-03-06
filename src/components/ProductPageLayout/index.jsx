import { useParams } from "react-router";
import data from "../../data.json";
import SeeProductBtn from "../SeeProductBtn";
import styles from "./style.module.scss";
import { useState } from "react";
import Gallery from "../Gallery";
const ProductPageLayout = () => {
  const { id } = useParams();
  const product = data.find((product) => product.id === +id);
  const [value, setValue] = useState(0);
  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => value >= 1 && setValue((prev) => prev - 1);

  return (
    <>
      {product === undefined ? (
        <div>The page is not found.</div>
      ) : (
        <div className="container">
          <div className={styles.productContainer}>
            <img src={product.image.desktop} alt={product.id} />
            <section className={styles.textContainer}>
              <h3>{product.name}</h3>
              <p className={styles.text}>{product.description}</p>
              <p className={styles.priceText}>
                <strong>{`$ ${product.price}`}</strong>
              </p>
              <div className={styles.buttonContainer}>
                <div className={styles.rangeContainer}>
                  <p onClick={decrement}>-</p>
                  <p>{value}</p>
                  <p onClick={increment}>+</p>
                </div>
                <SeeProductBtn title="Add To Cart" type="orange" />
              </div>
            </section>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.features}>
              <h4 className={styles.title}>Features</h4>
              <p className={styles.text}>{product.features}</p>
            </div>
            <div className={styles.includes}>
              <h4 className={styles.title}>In The Box</h4>
              {product.includes.map((item) => (
                <p>
                  <span>{`${item.quantity}x`}</span>
                  <span className={styles.text}>{item.item}</span>
                </p>
              ))}
            </div>
          </div>
          <Gallery product={product} />
        </div>
      )}
    </>
  );
};

export default ProductPageLayout;
