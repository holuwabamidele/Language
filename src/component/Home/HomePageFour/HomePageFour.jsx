import BeLangComp from "../../Block/BeLangComp/BeLangComp";
import "./HomePageFour.css";
import MeetOnline from "../../../assets/webp/Meetonline.webp";
import { FaArrowRight } from "react-icons/fa";

const HomePageFour = () => {
  return (
    <div className="HomeFourContainer">
      <div className="HomeFourWrapper">
        <div className="ImageHolder">
          <img src={MeetOnline} alt="" />
        </div>
        <div className="HomeFourText">
          <BeLangComp />
          <h2>Quis vulputate nibh aliquet libero, mi ultricies arcu, arcu.</h2>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula.
          </p>
          <button>
            <span>Read more</span> <FaArrowRight className="arrowSign" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePageFour;
