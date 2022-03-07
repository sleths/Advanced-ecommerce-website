import { useState, useEffect } from "react";
import data from "../../data.json";
import styles from "./style.module.scss";

import SeeProductBtn from "../SeeProductBtn";

const LikeComponent = () => {
  const [randomIndex, setRandomIndex] = useState(1);
  useEffect(() => setRandomIndex(Math.floor(Math.random() * data.length)), []);
  return (
    <section className="container">
      <h1 className={styles.title}>YOU MAY ALSO LIKE</h1>
      {data[randomIndex].name !== undefined ? (
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <img src={data[randomIndex].image.desktop} alt={data[randomIndex].name} />
            <h3>{data[randomIndex].name}</h3>
            <SeeProductBtn link={`/product/${data[randomIndex].id}`} type="orange" />
          </div>
          <div className={styles.card}>
            {randomIndex !== 0 ? (
              <>
                <img src={data[randomIndex - 1].image.desktop} alt={data[randomIndex-1].name} />
                <h4>{data[randomIndex - 1].name}</h4>
                <SeeProductBtn link={`/product/${data[randomIndex - 1].id}`}type="orange" />
              </>
            ) : (
              <>
                <img src={data[randomIndex + 2].image.desktop} alt={data[randomIndex+2].name} />
                <h4>{data[randomIndex + 2].name}</h4>
                <SeeProductBtn link={`/product/${data[randomIndex + 2].id}`} type="orange" />
              </>
            )}
          </div>
          <div className={styles.card}>
            {randomIndex !== 5 ? (
              <>
              <img src={data[randomIndex + 1].image.desktop} alt={data[randomIndex+1].name} />
                <h4>{data[randomIndex + 1].name}</h4>
                <SeeProductBtn link={`/product/${data[randomIndex + 1].id}`} type="orange" />
              </>
            ) : (
              <>
              <img src={data[randomIndex - 2].image.desktop} alt={data[randomIndex-2].name} />
                <h4>{data[randomIndex - 2].name}</h4>
                <SeeProductBtn link={`/product/${data[randomIndex - 2].id}`} type="orange" />
              </>
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
};
export default LikeComponent;
