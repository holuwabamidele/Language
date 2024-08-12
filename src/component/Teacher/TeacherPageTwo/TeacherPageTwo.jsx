import "./TeacherPageTwo.css";
import BeLangComp from "../../Block/BeLangComp/BeLangComp";

const TeacherPageTwo = () => {
  return (
    <div className="TeacherTwoContainer">
      <div className="TeacherTwoWrapper">
        <div className="TeacherTwoTextOne">
          <BeLangComp />
          <h1>
            <span style={{ color: "#5F2A5D" }}>Online Language School</span>
            <span style={{ color: "#FF885E" }}>
              {" "}
              for <br />
              Adults & Children
            </span>
          </h1>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula.
          </p>
        </div>

        <div className="TeacherTwoTextTwo">
          <p>
            Suspendisse facilisis convallis eros rutrum iaculis mauris quis
            etiam convallis himenaeos congue blandit pharetra amet habitasse
            cras viverra class volutpat.
          </p>
          <br />
          <h3>Lacinia cursus in augue laoreet egestas:</h3>
          <p>
            <ul>
              <li>
                Elementum mollis augue rutrum dictum pellentesque nostra curae
                elit mollis convallis adipiscing integer potenti ligula.
              </li>
              <br />
              <li>
                Nisl phasellus aenean cras tincidunt erat ut aliquam etiam
                pulvinar pharetra conubia scelerisque ligula hac.
              </li>
              <br />
              <li>
                Vivamus risus tellus cursus nibh felis habitant molestie elit
                magna mattis dui etiam scelerisque ornare.
              </li>
              <br />
              <li>
                Id interdum ante mattis pretium mi vivamus class mauris diam
                vestibulum magna aptent nulla lacinia.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeacherPageTwo;
