import BeLangComp from "../../Block/BeLangComp/BeLangComp";
import "./AboutPageFour.css";
import About4 from "../../../assets/webp/About4.webp";

const AboutPageFour = () => {
  return (
    <div className="AboutFourContainer">
      <div className="AboutFourWrapper">
        <div className="AboutFourTextArea">
          <BeLangComp />
          <h1>Sed sagittis nunc tristique et ullamcorper purus.</h1>
          <p>
            Non ornare sed leo vulputate arcu dignissim nisi lectus. Non
            maecenas convallis habitasse sed sodales. Condimentum cursus odio
            euismod eget diam iaculis sit. <br />
            <br />
            Amet montes, nunc sit aliquet pellentesque ac nunc. At mi ut sem
            purus nisi, sed aliquam tempor commodo. Elementum elit adipiscing
            tortor odio vestibulum. Mi turpis tristique iaculis nascetur rutrum
            maecenas justo sapien.
          </p>
        </div>
        <div className="AboutFourImageArea">
          <img src={About4} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default AboutPageFour;
