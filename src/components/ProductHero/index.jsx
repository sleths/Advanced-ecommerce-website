import styles from "./style.module.scss";

const ProductHero = () => {
  return (
    <div className={styles.heroContainer}>
      <section className={`container centered ${styles.hero}`}>
        <h1>Headphones</h1>
      </section>
    </div>
  );
};

export default ProductHero;
