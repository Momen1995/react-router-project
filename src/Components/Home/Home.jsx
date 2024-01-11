import Header from "../Header/Header";
import IconRow from "../IconRow/IconRow";
import Search from "../Search/Search";

const Home = () => {
  return (
    <div className="w-full mx-0 lg:w-10/12 lg:mx-auto">
      <Header />
      <div>
        <Search />
      </div>
      <IconRow />
    </div>
  );
};

export default Home;