import CoursesPageOne from "../../component/Courses/CoursesPageOne/CoursesPageOne";
import CoursesCountries from "../../component/Courses/CoursesCountries/CoursesCountries";
import CoursesPageThree from "../../component/Courses/CoursesPageThree/CoursesPageThree";
import CoursesPageTwo from "../../component/Courses/CoursesPageTwo/CoursesPageTwo";
import CoursesPageFour from "../../component/Courses/CoursesPageFour/CoursesPageFour";
import CoursesPageFive from "../../component/Courses/CoursesPageFive/CoursesPageFive";

const Courses = () => {
  return (
    <div>
      <CoursesPageOne />
      <CoursesCountries />
      <CoursesPageTwo />
      <CoursesPageThree />
      <CoursesPageFour />
      <CoursesPageFive />
    </div>
  );
};

export default Courses;
