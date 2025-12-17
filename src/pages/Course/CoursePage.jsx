import { useParams } from "react-router-dom";
import { ScrollToTop } from "../../utils/ScrollToTop";
export default function CoursePage() {
  const { id } = useParams("id");
  console.log(Number(id));

  ScrollToTop();

  return (
    <div className="page">
      <h1>CoursePage {id}</h1>
    </div>
  );
}
