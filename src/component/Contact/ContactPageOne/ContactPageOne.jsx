import { BiSolidTimeFive } from "react-icons/bi";
import "./ContactPageOne.css";
import { ImLocation } from "react-icons/im";
import { IoMdMail } from "react-icons/io";

const ContactPageOne = () => {
  return (
    <div className="ContactOneContainer">
      <div className="ContactOneWrapper">
        <div className="Contact">
          <button>Contact</button>
          <h1>+61 (0) 3 8376 6284</h1>
          <h2>
            Level 13, 2 Elizabeth St, <br /> Melbourne, Victoria 3000, Australia
          </h2>
        </div>
        <div className="ContactOneWrapperTwo">
          <div className="otherInfo">
            <div className="reactIcon">
              <BiSolidTimeFive />
            </div>
            <h3>Everyday: 7 AM - 8 PM</h3>
          </div>
          <div className="otherInfo">
            <div className="reactIcon">
              {" "}
              <ImLocation />
            </div>
            <h3>Level 13, 2 Elizabeth St</h3>
          </div>
          <div className="otherInfo">
            <div className="reactIcon">
              <IoMdMail />
            </div>
            <h3>noreply@envato.com</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageOne;
