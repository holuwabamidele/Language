import "./CoursesPageThree.css";
import { FaArrowRight } from "react-icons/fa";
import CourseB2 from "../../../assets/webp/CourseB2.webp";

const CoursesPageThree = () => {
  return (
    <div className="CourseThreeContainer">
      <div className="CourseThreeWrapper">
        <div className="CourseThreeTextArea">
          <h3>
            In eget phasellus id bibendum. Lorem eget tortor et morbi. Sit
            vestibulum sed id.
          </h3>
          <p>
            <span>
              Sed ut ornare gravida eget est. Nibh senectus tempus molestie
              nulla malesuada pellentesque vel eu. Vitae risus, elementum felis
              ligula amet ut. Viverra sed at imperdiet aliquet sed massa netus
              lectus penatibus. Id eget quam facilisis nulla turpis nunc.
              Blandit mi, amet, lorem ac et urna.
            </span>{" "}
            <br />
            <br />
            <span>
              Egestas commodo proin vel morbi nunc nunc, tincidunt. Molestie
              euismod vulputate sollicitudin sociis massa platea mauris, semper.
              Sit nulla consequat sagittis, tincidunt proin. Tincidunt nullam
              augue elementum, arcu sed risus elit pulvinar.
            </span>
          </p>
          <button>
            {" "}
            <span>
              {" "}
              Sign up for a course <FaArrowRight />
            </span>
          </button>
        </div>
        <div className="courseThreeImageArea">
          <img src={CourseB2} alt="" />
          <main>
            The course is intended for those who want to obtain an B2
            certificate after the course
          </main>
        </div>
      </div>
    </div>
  );
};

export default CoursesPageThree;
