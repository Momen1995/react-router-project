import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GlobalContext } from "../../Context/GlobalProvider";
import { useParams } from "react-router-dom";

const Search = () => {
  const { icons, setInputIcons, filteredData, setFilteredData } =
    useContext(GlobalContext);
  const { id } = useParams();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue.trim() === "") {
      setInputIcons([]);
      setFilteredData([]);
      return;
    }

    const filteredIcons = icons.filter((icon) =>
      icon.category.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(filteredIcons);
    setInputIcons(filteredIcons);
  }, [inputValue, icons, setInputIcons, id, setFilteredData]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <div className=" w-11/12 lg:w-9/12 mx-auto mt-4 relative">
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type here"
          className="border-solid border-2 border-[#183153] px-12 py-5 rounded-full  w-full hover:outline outline-offset-2 outline-sky-500"
        />
        <FaSearch className="absolute bottom-6 left-6 text-[18px] text-slate-800" />
      </form>
      {filteredData.length === 0 && inputValue !== "" && (
        <p className="text-red-500 mt-2">No data found</p>
      )}
    </div>
  );
};

export default Search;
