import styles from "./style.module.scss"
import SeeProductBtn from "../SeeProductBtn"

const Hero = () => {
  return <section className={styles.container}>
    <p className="overline">New Product</p>
    <h1>XX99 Mark II Headphones</h1>
    <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
    <SeeProductBtn link="#"/>
  </section>;
};

export default Hero;
