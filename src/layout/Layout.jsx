import { Outlet } from "react-router-dom";
import Header from "../static/Header/Header";
import Footer from "../static/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
