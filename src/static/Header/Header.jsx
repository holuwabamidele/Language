import "./Header.css";
import Image from "../../assets/svg/Header Logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerHolder">
        <div className="headerLogo">
          <img src={Image} alt="logo" />
        </div>
        <div className="headerNav">
          <Link className="link" to="/">
            <nav>Home</nav>
          </Link>
          <Link className="link" to="/courses">
            <nav>Courses</nav>
          </Link>
          <Link className="link" to="/about">
            <nav>About Us</nav>
          </Link>
          <Link className="link" to="/teacher">
            <nav>Teachers</nav>
          </Link>
          <Link className="link" to="/contact">
            <nav>Contact</nav>
          </Link>
          <RxHamburgerMenu className="burgerMenu" />
          <button>Call Us</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
