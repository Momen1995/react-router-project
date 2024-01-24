import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import IconRow from "../IconRow/IconRow";
import Search from "../Search/Search";
import IconColumn from "../IconColumn/IconColumn";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="w-full mx-0 lg:w-10/12 lg:mx-auto">
        <div className="bg-[#fff">
          <Header />
          <Search />
          <IconRow/>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-4 bg-[#f0f1f3]">
          <div className="w-2/12 mt-12 text-left">
            <IconColumn />
          </div>
          <div className="w-full mt-8">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;