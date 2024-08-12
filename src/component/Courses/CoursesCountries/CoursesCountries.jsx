import "./CoursesCountries.css";
import Japan from "../../../assets/svg/japan.svg";
import France from "../../../assets/svg/france.svg";
import Spain from "../../../assets/svg/spain.svg";
import Mexico from "../../../assets/svg/mexico.svg";
import China from "../../../assets/svg/china.svg";
import Italy from "../../../assets/svg/italy.svg";

const CoursesCountries = () => {
  const SecondCountries = [
    {
      secondImage: `${Japan}`,
      secondName: "Japan",
      secondCourses: 12,
    },
    {
      secondImage: `${France}`,
      secondName: "France",
      secondCourses: 32,
    },
    {
      secondImage: `${Spain}`,
      secondName: "Spain",
      secondCourses: 53,
    },
    {
      secondImage: `${Mexico}`,
      secondName: "Mexico",
      secondCourses: 17,
    },
    {
      secondImage: `${China}`,
      secondName: "China",
      secondCourses: 17,
    },
    {
      secondImage: `${Italy}`,
      secondName: "Italy",
      secondCourses: 27,
    },
  ];

  return (
    <div className="SecondGeneralContainer">
      <div className="SecondGeneralWrapper">
        <div className="SecondTextArea">
          <h1>
            <span style={{ color: "#5F2A5D" }}>Courses available </span>{" "}
            <span style={{ color: "#FF885E" }}>for many languages</span>
          </h1>
        </div>
        <div className="SecondCountryWrapper">
          {SecondCountries.map((contData, index) => (
            <div key={index} className="SecondCountryCard">
              <img src={contData.secondImage} alt="" />
              <h3>{contData.secondName}</h3>
              <p>{contData.secondCourses}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesCountries;
