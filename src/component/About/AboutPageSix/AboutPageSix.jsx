import { FaArrowRight } from "react-icons/fa";
import "./AboutPageSix.css";
import { FaHeart } from "react-icons/fa";

const AboutPageSix = () => {
  return (
    <div className="AboutSixContainer">
      <div className="AboutSixWrapper">
        <div className="joinDiv">
          <h1>
            <span>
              Join the group of <br /> students from all <br />
            </span>{" "}
            <span
              style={{
                color: "#E87A5E",
              }}
            >
              over the world
            </span>
          </h1>
          <button>
            <span>About Us</span>
            <FaArrowRight />
          </button>
        </div>
        <div className="percentDiv">
          <div className="IconHolder">
            <main className="Icons">
              <FaHeart className="Icon" />
            </main>
            <main className="Icons">
              <FaHeart className="Icon" />
            </main>
            <main className="Icons">
              <FaHeart className="Icon" />
            </main>
            <main className="Icons">
              <FaHeart className="Icon" />
            </main>
            <main className="Icons">
              <FaHeart className="Icon" />
            </main>
          </div>
          <div className="ninityTwo">
            <h1>92%</h1>
            <span>
              Of Satisfied <br /> students
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageSix;
