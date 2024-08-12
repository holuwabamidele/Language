import "./CoursesPageTwo.css";
import { FaArrowRight } from "react-icons/fa";
import CourseA1 from "../../../assets/webp/CourseA1.webp";

const CoursesPageTwo = () => {
  return (
    <div className="CourseTwoContainer">
      <div className="CourseTwoWrapper">
        <div className="courseTwoImageArea">
          <img src={CourseA1} alt="" />
          <main>
            The course is intended for those who want to obtain an A1
            certificate after the course
          </main>
        </div>
        <div className="CourseTwoTextArea">
          <h3>
            Eleifend amet, nec fermentum scelerisque. Vel sed placerat integer.
          </h3>
          <p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              mauris dolor, gravida a varius blandit, auctor eget purus.
              Phasellus scelerisque sapien sit amet mauris laoreet, eget
              scelerisque nunc cursus.
            </span>{" "}
            <br />
            <br />
            <span>
              Duis ultricies malesuada leo vel aliquet. Curabitur rutrum porta
              dui eget mollis. Nullam lacinia dictum auctor. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculu.
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

export default CoursesPageTwo;
