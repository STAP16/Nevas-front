import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", scrollHandler);

    // очистка при размонтировании
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
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
