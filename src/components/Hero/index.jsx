import styles from "./style.module.scss"

const Hero = () => {
  return <section className={styles.container}>
    <p className="overline">New Product</p>
    <h1>XX99 Mark II Headphones</h1>
    <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
    <a href="">See Product</a>
  </section>;
};

export default Hero;
