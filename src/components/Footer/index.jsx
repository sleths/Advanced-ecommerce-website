import styles from "./style.module.scss";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
<section className={styles.footerContainer}>
<section className={styles.container}>
  <h2>Audiophile</h2>
  <div className={styles.navbar}>
    <a href=""><h6>Home</h6></a>
    <a href=""><h6>Headphones</h6></a>
    <a href=""><h6>Speakers</h6></a>
    <a href=""><h6>Earphones</h6></a>
  </div>
  <article className={styles.footerText}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</article>
  <p>Copyright 2021. All Rights Reserved</p>
  <div className={styles.icons}>
  <FaFacebookSquare />
  <FaTwitter />
  <FaInstagram />
  </div>
</section>
</section>
  )
};

export default Footer; 