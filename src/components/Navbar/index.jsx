import logo from "../../assets/icons/logo.svg"
import hmbrgIcon from "../../assets/icons/icon-hamburger.svg"
import cartIcon from "../../assets/icons/icon-cart.svg"

import styles from "./style.module.scss"

const Navbar = () => {
return (
<header className={styles.header}>
<nav className={styles.container}>
<img src={hmbrgIcon} alt="Open the mobile menu." />
<img src={logo} alt="Company logo" />
<img src={cartIcon} alt="Go to the card." />
</nav>
</header>
)
}

export default Navbar;