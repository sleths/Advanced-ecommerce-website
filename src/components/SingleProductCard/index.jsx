import img from "../../assets/product-xx59-headphones/mobile/image-gallery-1.jpg";
import SeeProductBtn from "../SeeProductBtn";
import styles from "./style.module.scss";

const SingleProductCard = () => {
  return (
  <div>
    <section className={`container centered ${styles.section}`}>
      <img src={img} alt="product" />
      <div className={`centered ${styles.section}`}>
        <p className="overline">New Product</p>
        <h1>XX99 Mark II Headphones</h1>
        <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
        <SeeProductBtn type="orange"/>
      </div>
    </section>
  </div>
  )
};
export default SingleProductCard;