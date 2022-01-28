import styles from "./style.module.scss";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const date = new Date();
  return (
<footer className={styles.footerContainer}>
<section className={styles.container}>
  <div className={styles.navbarContainer}>
  <h2>Audiophile</h2>
  <div className={styles.navbar}>
    <a href="">Home</a>
    <a href="">Headphones</a>
    <a href="">Speakers</a>
    <a href="">Earphones</a>
  </div>
  </div>
  <article className={styles.footerText}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</article>
  <div className={styles.footerSubtext}>
  <p>Copyright &#169; {date.getFullYear()} Sera Zenginler. All Rights Reserved. </p>
  <div className={styles.icons}>
  <FaFacebookSquare />
  <FaTwitter />
  <FaInstagram />
  </div>
  </div>
</section>
</footer>
  )
};

export default Footer; 