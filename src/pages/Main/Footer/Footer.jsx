import styles from "./Footer.module.css";
import bg from "./bg.svg.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.contentBlock}>
        <section className={`${styles.infoSection} ${styles.brandContainer}`}>
          <h4 className={`${styles.footerTextName} gradientText`}>NEVAS</h4>
          <label>© NEVAS, 2025</label>
        </section>
        <section className={styles.infoSection}>
          <p>ОБЩЕЕ</p>
          <div className={styles.navSection}>
            <NavLink to="/question">Вопросы</NavLink>
            <NavLink to="/about">О нас</NavLink>
          </div>
        </section>
        <section className={styles.infoSection}>
          <p>ИНФОРМАЦИЯ</p>
          <div className={styles.navSection}>
            <NavLink to="/students">Для учеников</NavLink>
            <NavLink to="/teachers">Для преподавателей</NavLink>
          </div>
        </section>
        <section className={styles.infoSection}>
          <p>РУКОВОДСТВО</p>
          <div className={styles.navSection}>
            <NavLink to="/students">Как пользоваться платформой</NavLink>
            <NavLink to="/teachers">Что мы предлагаем</NavLink>
          </div>
        </section>
      </div>
      <div className={styles.footerBg}>
        <img src={bg} alt="" />
      </div>
    </div>
  );
}
