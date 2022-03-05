import { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import hmbrgIcon from "../../assets/icons/icon-hamburger.svg";
import cartIcon from "../../assets/icons/icon-cart.svg";
import ProductCardContainer from "../ProductCardContainer";
import { Link } from "react-router-dom";

import styles from "./style.module.scss";

const Navbar = ({isOnProductPage}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleClick = () => setIsNavOpen((prev) => !prev);
  const navLinks = [
    {
      name: "home",
      to: "/",
    },
    {
      name: "headphones",
      to: "/headphones",
    },
    {
      name: "speakers",
      to: "/speakers",
    },
    {
      name: "earphones",
      to: "/earphones",
    },
  ];
  return (
    <>
      <header className={isOnProductPage ? `${styles.header} ${styles.product}` : styles.header}>
        <nav className={styles.container}>
          <img
            src={hmbrgIcon}
            alt="Open the mobile menu."
            onClick={handleClick}
          />
          <img src={logo} alt="Company logo" />
          <ul className={styles.list}>
            {navLinks.map((link) => (
              <li key={link.name}><Link to={link.to}>{link.name}</Link></li>
            )
            )}
          </ul>
          <img src={cartIcon} alt="Go to the card." />
        </nav>
        {isNavOpen && <ProductCardContainer isOnNav />}
      </header>
      {isNavOpen && <div className={styles.overlay}></div>}
    </>
  );
};

export default Navbar;
