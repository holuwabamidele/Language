import "./TeacherPageFour.css";
import Teacher2 from "../../../assets/webp/teachers-pic2.webp";
import { FaDribbble, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeacherPageFour = () => {
  return (
    <div className="TeacherFourContainer">
      <div className="TeacherFourWrapper">
        <div className="TeacherFourTextArea">
          <h1>Jennifer Lee</h1>
          <span>China</span>
          <hr />
          <p>
            Vulputate dis mattis nisl, sociis urna. Tellus habitant nisl nunc
            interdum vulputate vulputate. Pulvinar tortor vitae lorem mattis
            neque ac sed id. Et in consequat felis, commodo risus augue cras mi
            dolor. Lacus, et justo, tempor cursus. Massa lacus, odio risus cras
            elit ut turpis. Cursus suscipit erat ut pretium lectus. Cras arcu
            tellus faucibus sagittis, magna scelerisque etiam diam.
            <br />
            <br />
            Porta euismod vestibulum etiam bibendum nibh vel. Lorem hendrerit
            sagittis ipsum arcu non. Integer eu massa maecenas.
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
        <div className="TeacherFourImageHolder">
          <img src={Teacher2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TeacherPageFour;
