import CourseCard from "../../../../components/CourseCard/CourseCard";
import styles from "./SecondScreen.module.css";

export default function SecondScreen() {
  return (
    <div className={styles.content}>
      <h2 className={styles.courseContainerTitle}>Наши курсы</h2>
      <div className={styles.courseContainer}>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
      </div>
    </div>
  );
}
