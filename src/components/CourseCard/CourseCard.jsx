import styles from "./CourseCard.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ course }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={styles.cardContainer}
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
      onClick={() => navigate(`/course/${course.id}`)}
    >
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={course.image ? course.image : "./courseImage.svg"} alt="" />
        </div>
        <div className={styles.descriptionBlock}>
          <section className={styles.descSection}>
            <h3>{course.title}</h3>
          </section>
          <section className={styles.descSection}>
            <p>{course.description}</p>
          </section>
          <section className={styles.descSection}>
            <span>Maded by: {course.author}</span>
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
