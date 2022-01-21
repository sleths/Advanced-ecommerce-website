import right from "../../../assets/icons/icon-arrow-right.svg";
import styles from "./style.module.scss";

const ProductCard = ({src, alt, title, link}) => {
  return (
    <section className={`${styles.container} centered`}>
      <img src={src} alt={alt} />
      <h5>{title}</h5>
      <div>
      <a href={link}>Shop</a>
      </div>
    </section>
  )
};

export default ProductCard;
