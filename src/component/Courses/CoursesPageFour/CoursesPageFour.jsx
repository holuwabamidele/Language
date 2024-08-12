import "./CoursesPageFour.css";
import { FaArrowRight } from "react-icons/fa";
import CourseC1 from "../../../assets/webp/CourseC1.webp";

const CoursesPageFour = () => {
  return (
    <div className="CourseFourContainer">
      <div className="CourseFourWrapper">
        <div className="courseFourImageArea">
          <img src={CourseC1} alt="" />
          <main>
            The course is intended for those who want to obtain an C1
            certificate after the course
          </main>
        </div>
        <div className="CourseFourTextArea">
          <h3>
            Interdum nullam sem sed quis turpis amet, hendrerit. Et in non
            condimentum.
          </h3>
          <br />
          <p>
            <span>
              Sit sodales vivamus tincidunt volutpat volutpat risus odio quis.
              Varius egestas volutpat blandit ut elementum non quam non.
              Malesuada quis morbi urna nunc, mauris eget. Dui, faucibus
              ullamcorper enim feugiat. Rhoncus lectus mi nunc egestas aenean
              tempor accumsan laoreet eu. Aliquet sed lectus sed iaculis vel
              interdum bibendum justo.
            </span>{" "}
            <br />
            <br />
            <span>
              Justo, eget ipsum, lectus sit porta luctus sed iaculis. Diam
              magnis viverra integer id. Nibh massa felis nisi in morbi viverra
              ut egestas. Sagittis imperdiet laoreet elementum orci purus
              praesent ultricies leo risus. Iaculis consectetur sapien
              suspendisse vitae sed proin.
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
      </div>
    </div>
  );
};

export default CoursesPageFour;
