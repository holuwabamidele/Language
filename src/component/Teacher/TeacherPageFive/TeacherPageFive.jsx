import "./TeacherPageFive.css";
import Teacher3 from "../../../assets/webp/teachers-pic3.webp";
import { FaDribbble, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeacherPageFive = () => {
  return (
    <div className="TeacherFiveContainer">
      <div className="TeacherFiveWrapper">
        <div className="TeacherFiveImageHolder">
          <img src={Teacher3} alt="" />
        </div>
        <div className="TeacherFiveTextArea">
          <h1>Darlene Robertson</h1>
          <span>German</span>
          <hr />
          <p>
            Vulputate vulputate tempus nunc convallis egestas urna fringilla
            porta. Id tellus donec pulvinar non. Phasellus suspendisse porttitor
            quisque enim est eu leo. Phasellus vestibulum, facilisi magna in
            lectus venenatis enim. Et sed nunc ultrices aliquet condimentum
            aliquam accumsan, id. Sed morbi malesuada lorem in arcu massa nisi.
            <br />
            <br />
            Pulvinar ipsum amet massa cursus viverra est arcu sed sollicitudin.
            Leo, tellus sed nam amet ultrices adipiscing urna. Bibendum netus
            tellus viverra mauris varius duis. Viverra ac a vel.
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

export default TeacherPageFive;
