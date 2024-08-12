import "./Footer.css";
import FooterLogo from "../../assets/svg/Header Logo.svg";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="FooterHolder">
        <div className="FooterLogo">
          <img src={FooterLogo} alt="" />
          <p>
            Arcu sit venenatis lacinia dolor urna. Amet magna <br />
            vulputate elit vestibulum ultrices. Viverra ultrices vel <br />{" "}
            morbi sed tortor, lacus, dui id scelerisque.
          </p>
        </div>
        <div>
          <h3>Address</h3>
          <p>
            Envato <br />
            Level 13, 2 Elizabeth <br /> Victoria 3000 <br />
            Australia
          </p>
        </div>
        <div>
          <h3>Opening hours</h3>
          <p>
            Monday - Friday: <br />
            09:00 AM - 06:00 PM <br />
            Saturday: <br />
            07:00 AM - 08:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
