import { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import hmbrgIcon from "../../assets/icons/icon-hamburger.svg";
import cartIcon from "../../assets/icons/icon-cart.svg";
import ProductCardContainer from "../ProductCardContainer";

import styles from "./style.module.scss";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleClick = () => setIsNavOpen((prev) => !prev);
  return (
    <>
    <header className={styles.header}>
      <nav className={styles.container}>
        <img
          src={hmbrgIcon}
          alt="Open the mobile menu."
          onClick={handleClick}
        />
        <img src={logo} alt="Company logo" />
        <img src={cartIcon} alt="Go to the card." />
      </nav>
      {isNavOpen && <ProductCardContainer isOnNav />}
    </header>
    {isNavOpen &&  <div className={styles.overlay}></div>}
    </>
  );
};

export default Navbar;
