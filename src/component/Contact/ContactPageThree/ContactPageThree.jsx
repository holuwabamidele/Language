import { ImLocation } from "react-icons/im";
import "./ContactPageThree.css";

const ContactPageThree = () => {
  return (
    <div className="ContactThreeContainer">
      <div className="ContactThreeWrapper">
        <div>
          <h2>
            <span style={{ color: " #ffff" }}>Check out</span> <br />
            <span style={{ color: "#ff885e" }}>our locations</span>
          </h2>
        </div>
        <div className="Address">
          <div className="Location">
            <ImLocation className="Icon" />
            <h4>Address 1</h4>
            <p>
              Envato Level 13, 2 Elizabeth, <br /> Victoria 3000, Australia
            </p>
          </div>
          <div className="Location">
            <ImLocation className="Icon" />
            <h4>Address 2</h4>
            <p>
              Envato Level 13, 2 Elizabeth, <br /> Victoria 3000, Australia
            </p>
          </div>
          <div className="Location">
            <ImLocation className="Icon" />
            <h4>Address 3</h4>
            <p>
              Envato Level 13, 2 Elizabeth, <br /> Victoria 3000, Australia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPageThree;
