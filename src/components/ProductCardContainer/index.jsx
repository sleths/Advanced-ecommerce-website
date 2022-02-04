import ProductCard from "./ProductCard";
import headphoneImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphoneImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import styles from "./style.module.scss";

const ProductCardContainer = ({isOnNav, isOnEveryPage}) => {
  const productData = [
    {
      src: headphoneImg,
      alt: "Headphones",
      title: "Headphones",
      link: "/headphones",
    },
    {
      src: speakerImg,
      alt: "Speakers",
      title: "Speakers",
      link: "/speakers",
    },
    {
      src: earphoneImg,
      alt: "Earphones",
      title: "Earphones",
      link: "/earphones",
    },
  ];
  return (
    <section className={isOnNav ? `${styles.container} ${styles.containerOnNav} centered` : 
    isOnEveryPage ? `${styles.isOnEveryPage} ${styles.container} centered` : `${styles.container} centered`}>
      {productData.map((product) => (
        <ProductCard
          src={product.src}
          alt={product.alt}
          title={product.title}
          link={product.link}
          key={product.title}
        />
      ))}
    </section>
  );
};

export default ProductCardContainer;
