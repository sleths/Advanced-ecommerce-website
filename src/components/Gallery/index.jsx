import React from "react";
import styles from "./style.module.scss";
const Gallery = ({ product }) => {
  return (
    <div className={styles.gallery}>
      <div className={styles.imgContainer}>
        <img src={product.gallery.first.desktop} alt={product.name} />
        <img src={product.gallery.second.desktop} alt={product.name} />
      </div>
      <div className={styles.imgOnly}>
        <img src={product.gallery.third.desktop} alt={product.name} />
      </div>
    </div>
  );
};

export default Gallery;
