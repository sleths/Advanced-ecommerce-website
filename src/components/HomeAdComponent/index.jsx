import styles from "./style.module.scss";
import orangeSpeakerImg from "../../assets/home/mobile/image-speaker-zx9.png";
import earPhoneImg from "../../assets/home/mobile/image-earphones-yx1.jpg";
import SeeProductBtn from "../SeeProductBtn";

const HomeAdComponent = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.orangeSpeaker} centered`}>
        <img src={orangeSpeakerImg} alt="Orange speaker" />
        <h1>ZX9 speaker</h1>
        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <SeeProductBtn link="" type="black" />
      </div>

      <div className={`${styles.graySpeaker} centered`}>
        <h1>ZX7 speaker</h1>
        <SeeProductBtn link="" type="bordered" />
      </div>

      <div className={`${styles.earPhones} centered`}>
        <img src={earPhoneImg} alt="Earphones" />
      <div className={`${styles.grayEarphones}`}>
      <h1>YX1 earphones</h1>
      <SeeProductBtn link="" type="bordered" />
      </div>
      </div>
    </section>
  );
};

export default HomeAdComponent;
