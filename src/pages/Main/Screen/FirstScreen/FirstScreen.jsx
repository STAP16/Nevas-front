import styles from "./FirstScreen.module.css";
import HelloSection from "./HelloSection";
export default function FirstScreen() {
  return (
    <>
      <div>
        <HelloSection />
      </div>
      <section className={styles.imageSection}>
        <img src="mainLine.svg" alt="" className={styles.mainImage} />
      </section>
    </>
  );
}
