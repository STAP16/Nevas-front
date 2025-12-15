import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img src="nevas_logo.svg" alt="logotype" />
        <label className={styles.gradientText}>NEVAS</label>
      </div>

      <nav className={styles.navBar}>
        <NavLink to="/about">о нас</NavLink>
        <NavLink to="/contact">контакты</NavLink>
        <NavLink to="/catalog">каталог</NavLink>
      </nav>
    </header>
  );
}
