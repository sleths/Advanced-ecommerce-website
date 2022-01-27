import styles from "./style.module.scss";
import orangeSpeakerImg from "../../assets/home/mobile/image-speaker-zx9.png";
import orangeTabletImg from "../../assets/home/tablet/image-speaker-zx9.png";
import earPhoneMobileImg from "../../assets/home/mobile/image-earphones-yx1.jpg";
import earPhoneTabletImg from "../../assets/home/tablet/image-earphones-yx1.jpg";
import earPhoneDesktopImg from "../../assets/home/desktop/image-earphones-yx1.jpg";
import SeeProductBtn from "../SeeProductBtn";

const HomeAdComponent = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.orangeSpeaker} centered`}>
        <img src={orangeSpeakerImg} alt="Orange speaker" className={styles.mobileImg}/>
        <img src={orangeTabletImg} alt="Orange speaker" className={styles.tabletImg}/>
      <div className={`${styles.textContainer} centered`}>        
        <h1>ZX9 speaker</h1>
        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <SeeProductBtn link="" type="black" />
      </div>
      </div>

      <div className={`${styles.graySpeaker} centered`}>
        <h1>ZX7 speaker</h1>
        <SeeProductBtn link="" type="bordered" />
      </div>

      <div className={`${styles.earPhones} centered`}>
        <img src={earPhoneMobileImg} alt="Earphones" className={styles.earphoneMobileImg}/>
        <img src={earPhoneTabletImg} alt="Earphones" className={styles.earphoneTabletImg}/>
        <img src={earPhoneDesktopImg} alt="Earphones" className={styles.earphoneDesktopImg}/>
      <div className={`${styles.grayEarphones}`}>
      <h1>YX1 earphones</h1>
      <SeeProductBtn link="" type="bordered" />
      </div>
      </div>
    </section>
  );
};

export default HomeAdComponent;
