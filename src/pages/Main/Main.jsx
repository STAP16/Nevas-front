import Button from "../../components/Button/Button";
import styles from "./Main.module.css";
export default function Main() {
  return (
    <div className="page">
      <div>
        <section className={styles.contentBlock}>
          <h1 className={styles.mainText}>Фокусировка</h1>
          <h2 className={styles.dwnText}>
            первый шаг к <p style={{ color: "#3CC58B" }}>прогрессу</p>
          </h2>
          <p className={styles.bigTextSection}>
            Сфокусируйся на главном, твое внимание постоянно уходит в сторону.
            Неозможно сбиться с пути, если каждый твой шаг осознан.
          </p>
          <div className={styles.btnSec}>
            <Button>Посмотреть пространство</Button>
          </div>
        </section>
      </div>
      <section className={styles.imageSection}>
        <img src="mainLine.svg" alt="" className={styles.mainImage} />
      </section>
    </div>
  );
}
