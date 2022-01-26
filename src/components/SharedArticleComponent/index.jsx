import styles from "./style.module.scss";
import headphoneModelMobileImg from "../../assets/shared/mobile/image-best-gear.jpg";
import headphoneModelTabletImg from "../../assets/shared/tablet/image-best-gear.jpg";

const SharedArticleComponent = () => {
  return (
    <section className={styles.container}>
      <img src={headphoneModelMobileImg} alt="Model with headphones" className={styles.mobileImg}/>
      <img src={headphoneModelTabletImg} alt="Model with headphones" className={styles.tabletImg}/>
      <div className={styles.textContainer}>
      <h2>Bringing you the <span>best</span> audio gear</h2>
      <article>
      <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </article>
      </div>
    </section>
  )
};

export default SharedArticleComponent;
