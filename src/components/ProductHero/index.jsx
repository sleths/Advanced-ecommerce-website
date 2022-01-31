import styles from "./style.module.scss";

const ProductHero = ({title}) => {
  return (
    <div className={styles.heroContainer}>
      <section className={`container centered ${styles.hero}`}>
        <h1>{title}</h1>
      </section>
    </div>
  );
};

export default ProductHero;
