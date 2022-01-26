import arrowRight from "../../../assets/icons/icon-arrow-right.svg";
import styles from "./style.module.scss";

const ProductCard = ({src, alt, title, link}) => {
  return (
    <section className={`${styles.container} centered`}>
      <img src={src} alt={alt} />
      <h6>{title}</h6>
      <div className={styles.btnContainer}>
      <a href={link}>Shop</a>
      <img src={arrowRight} alt="Click for seeing" />
      </div>
    </section>
  )
};

export default ProductCard;
