import CourseCard from "../../../../components/CourseCard/CourseCard";
import styles from "./SecondScreen.module.css";
import { courses } from "../../../../course_data";
export default function SecondScreen() {
  return (
    <div className={styles.content}>
      <h2 className={styles.courseContainerTitle}>Наши курсы</h2>
      <div className={styles.courseContainer}>
        {courses &&
          courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
      </div>
    </div>
  );
}
