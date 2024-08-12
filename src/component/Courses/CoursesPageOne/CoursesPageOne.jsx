import BeLangComp from "../../Block/BeLangComp/BeLangComp";
import "./CoursesPageOne.css";
import stepplane from "../../../assets/svg/stepplane.svg";
import steppen from "../../../assets/svg/steppen.svg";
import stepbadge from "../../../assets/svg/stepbadge.svg";

const CoursesPageOne = () => {
  const stepData = [
    {
      stepIcon: `${stepplane}`,
      stepNum: 1,
      stepTitle: "Step 1",
      stepContent:
        "Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor.",
    },
    {
      stepIcon: `${steppen}`,
      stepNum: 2,
      stepTitle: "Step 2",
      stepContent:
        "Mi urna dictumst conubia fringilla elit leo suspendisse. Magnis dictumst netus in.",
    },
    {
      stepIcon: `${stepbadge}`,
      stepNum: 3,
      stepTitle: "Step 3",
      stepContent:
        "Luctus imperdiet praesent. Lacus lobortis amet sapien dapibus nostra luctus bin.",
    },
  ];
  return (
    <div className="courseOneContainer">
      <div className="courseOneWrapper">
        <div className="courseOneText">
          <BeLangComp />
          <h1>
            <span style={{ color: "#FF885E" }}>
              Check available courses <br />
            </span>
            <span style={{ color: "#5F2A5D" }}> and choose your level</span>
          </h1>
          <p>
            Quam arcu vestibulum, quisque sed est vitae. Elit amet <br />
            tristique sagittis.
          </p>
        </div>
        <section className="courseOneImagesHolder">
          {stepData.map((data, index) => (
            <main key={index} className="courseOneImageWrapper">
              <div className="coursesOneImageHolder">
                <div className="coursesOneImageHold">
                  <img src={data.stepIcon} alt="icons" />
                </div>
                <h3>{data.stepNum}</h3>
                <h4>{data.stepTitle}</h4>
                <p>{data.stepContent}</p>
              </div>
            </main>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CoursesPageOne;
