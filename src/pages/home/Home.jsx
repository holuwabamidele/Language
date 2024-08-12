import HeroPage from "../../component/Home/HeroPage/HeroPage";
import Countries from "../../component/Home/Countries/Countries";
import HomePageTwo from "../../component/Home/HomePageTwo/HomePageTwo";
import HomeIconPage from "../../component/Home/HomePageThree/HomePageThree";
import HomePageFour from "../../component/Home/HomePageFour/HomePageFour";
import HomePageFive from "../../component/Home/HomePageFive/HomePageFive";
import HomePageSix from "../../component/Home/HomePageSix/HomePageSix";

const Home = () => {
  return (
    <div>
      <HeroPage />
      <Countries />
      <HomePageTwo />
      <HomeIconPage />
      <HomePageFour />
      <HomePageFive />
      <HomePageSix />
    </div>
  );
};

export default Home;
