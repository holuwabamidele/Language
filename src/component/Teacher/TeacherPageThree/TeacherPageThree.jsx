import "./TeacherPageThree.css";
import Teacher1 from "../../../assets/webp/teachers-pic1.webp";
import { FaDribbble, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeacherPageThree = () => {
  return (
    <div className="TeacherThreeContainer">
      <div className="TeacherThreeWrapper">
        <div className="TeacherThreeImageHolder">
          <img src={Teacher1} alt="" />
        </div>
        <div className="TeacherThreeTextArea">
          <h1>Leslie Alexander</h1>
          <span>Spanish</span>
          <hr />
          <p>
            Egestas elit elit aliquam morbi commodo at. Ipsum, purus nunc nulla
            viverra. Urna elit, vulputate mi elit ullamcorper eleifend malesuada
            ac mauris. Eget augue fermentum lacinia laoreet vitae etiam duis.
            Congue egestas viverra nam tristique sed arcu vestibulum. Nam odio
            in quisque adipiscing. Consequat diam quis ultrices sit sit leo
            bibendum tempor lorem.
            <br />
            <br />
            Enim dictum cursus malesuada tellus porta nunc nec id. Fusce velit
            amet, ipsum amet eget enim magna facilisis non. Cursus a vitae purus
            tempor elit sem.
          </p>
          <div className="Icons">
            <main className="facebook">
              {" "}
              <FaFacebookF />
            </main>
            <main className="linkedIn">
              <FaLinkedin />
            </main>
            <main className="twitter">
              {" "}
              <FaTwitter />
            </main>
            <main className="dribble">
              <FaDribbble />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherPageThree;
