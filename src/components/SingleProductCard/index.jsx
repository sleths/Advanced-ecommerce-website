import img from "../../assets/product-xx59-headphones/mobile/image-gallery-1.jpg";
import SeeProductBtn from "../SeeProductBtn";
import styles from "./style.module.scss";

const SingleProductCard = ({src, title, description}) => {
  return (
  <div>
    <section className={`container centered ${styles.section}`}>
      <img src={src} alt={title} />
      <div className={`centered ${styles.section}`}>
        <p className="overline">New Product</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <SeeProductBtn type="orange"/>
      </div>
    </section>
  </div>
  )
};
export default SingleProductCard;