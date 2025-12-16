import styles from "./CourseCard.module.css";
import { useState, useEffect } from "react";

export default function CourseCard({ course }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.cardContainer}
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
    >
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src="courseImage.svg" alt="" />
        </div>
        <div className={styles.descriptionBlock}>
          <section className={styles.descSection}>
            <h3>Lorem ipsum</h3>
          </section>
          <section className={styles.descSection}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              quam ipsum non aliquid commodi tempore enim architecto vitae eaque
              facere aperiam, excepturi reprehenderit ipsa praesentium autem
              incidunt consequatur adipisci sit.
            </p>
          </section>
          <section className={styles.descSection}>
            <span>Maded by: NEVAS</span>
          </section>
        </div>
        <section
          className={`${styles.startText} ${isHovered ? styles.visible : ""}`}
        >
          <h3>Начать погружение</h3>
        </section>
      </div>
    </div>
  );
}
