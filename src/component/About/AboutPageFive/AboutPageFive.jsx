import BeLangComp from "../../Block/BeLangComp/BeLangComp";
import "./AboutPageFive.css";
import ladyOne from "../../../assets/webp/ladyOne.webp";
import ladyTwo from "../../../assets/webp/ladyTwo.webp";
import ladyThree from "../../../assets/webp/ladyThree.webp";

const AboutPageFive = () => {
  const profileData = [
    {
      profileImage: `${ladyOne}`,
      profileName: "Leslie Alexander",
      profileCountry: "Spanish",
      profileLine: <hr />,
      profileContent:
        "Consectetur amet magna imperdiet sit viverra. Cursus tempor, malesuada magna odio vitae libero purus",
    },
    {
      profileImage: `${ladyTwo}`,
      profileName: "Jennifer Lee",
      profileCountry: "China",
      profileLine: <hr />,
      profileContent:
        "Venenatis nunc facilisi mauris, lectus ultrices aliquam. Felis montes, egestas adipiscing ut proin",
    },
    {
      profileImage: `${ladyThree}`,
      profileName: "Darlene Robertson",
      profileCountry: "German",
      profileLine: <hr />,
      profileContent:
        "Molestie tincidunt congue massa, vulputate. Eget nec bibendum sit nunc at diam porttitor eget amet",
    },
  ];
  return (
    <div className="AboutFiveContainer">
      <div className="AboutFiveWrapper">
        <BeLangComp />
        <h1>Our teachers</h1>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; <br /> Donec velit neque, auctor sit amet
          aliquam vel, ullamcorper sit amet ligula.
        </p>
        <section className="profileHolder">
          {profileData.map((data, index) => (
            <main key={index} className="mainProfile">
              <div className="profileImageDiv">
                <img src={data.profileImage} alt="logo" />
              </div>
              <h3>{data.profileName}</h3>
              <span>{data.profileCountry}</span>
              <hr />
              <p>{data.profileContent}</p>
            </main>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AboutPageFive;
