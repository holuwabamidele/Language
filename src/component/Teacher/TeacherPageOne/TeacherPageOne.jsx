import "./TeacherPageOne.css";
import BeLangComp from "../../Block/BeLangComp/BeLangComp";
import Image1 from "../../../assets/webp/image1.webp";

const TeacherPageOne = () => {
  return (
    <div>
      <div className="TeacherOneContainer">
        <div className="TeacherOneWrapper">
          <div className="TeacherOneText">
            <BeLangComp />
            <h1>
              <span style={{ color: "#5F2A5D" }}>
                We teach with <br />
              </span>
              <span style={{ color: "#FF885E" }}> passion and vocation</span>
            </h1>
            <p>
              Quam arcu vestibulum, quisque sed est vitae. Elit amet <br />
              tristique sagittis.
            </p>
          </div>
          <section className="TeacherOneImageHolder">
            <img src={Image1} alt="logo" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default TeacherPageOne;
