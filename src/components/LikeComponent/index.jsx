import { useState, useEffect } from "react";
import data from "../../data.json";

import SeeProductBtn from "../SeeProductBtn";

const LikeComponent = () => {
  const [randomIndex, setRandomIndex] = useState(1);
  useEffect(() => setRandomIndex(Math.floor(Math.random() * data.length)), []);
  return (
    <section>
      <h1>YOU MAY ALSO LIKE</h1>
      {data[randomIndex].name !== undefined ? (
        <div>
          <div>
            <img src={data[randomIndex].image.desktop} alt={data[randomIndex].name} />
            <h2>{data[randomIndex].name}</h2>
            <SeeProductBtn type="orange" />
          </div>
          <div>
            {randomIndex !== 0 ? (
              <>
                <img src={data[randomIndex - 1].image.desktop} alt={data[randomIndex-1].name} />
                <h2>{data[randomIndex - 1].name}</h2>
                <SeeProductBtn type="orange" />
              </>
            ) : (
              <>
                <img src={data[randomIndex + 2].image.desktop} alt={data[randomIndex+2].name} />
                <h2>{data[randomIndex + 2].name}</h2>
                <SeeProductBtn type="orange" />
              </>
            )}
          </div>
          <div>
            {randomIndex !== 5 ? (
              <>
              <img src={data[randomIndex + 1].image.desktop} alt={data[randomIndex+1].name} />
                <h2>{data[randomIndex + 1].name}</h2>
                <SeeProductBtn type="orange" />
              </>
            ) : (
              <>
              <img src={data[randomIndex - 2].image.desktop} alt={data[randomIndex-2].name} />
                <h2>{data[randomIndex - 2].name}</h2>
                <SeeProductBtn type="orange" />
              </>
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
};
export default LikeComponent;
