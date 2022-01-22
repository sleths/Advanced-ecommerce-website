import styles from "./style.module.scss";
import orangeSpeakerImg from "../../assets/home/mobile/image-speaker-zx9.png";
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
    </section>
  );
};

export default HomeAdComponent;
