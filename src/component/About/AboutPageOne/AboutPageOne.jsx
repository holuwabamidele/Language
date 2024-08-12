import "./AboutPageOne.css";
import BeLangComp from "../../Block/BeLangComp/BeLangComp";
import Image from "../../../assets/webp/aboutpage1.webp";

const AboutPageOne = () => {
  return (
    <div>
      <div className="AboutOneContainer">
        <div className="AboutOneWrapper">
          <div className="AboutOneText">
            <BeLangComp />
            <h1>
              <span style={{ color: "#FF885E" }}>
                Hello! <br />
              </span>
              <span style={{ color: "#5F2A5D" }}> Buongiorno! Hej!</span>
            </h1>
            <p>
              Quam arcu vestibulum, quisque sed est vitae. Elit amet <br />
              tristique sagittis.
            </p>
          </div>
          <section className="AboutOneImagesHolder">
            <img src={Image} alt="logo" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPageOne;
