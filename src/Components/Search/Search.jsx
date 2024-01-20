import { useContext, useEffect, useState } from "react";
import {  FaSearch } from "react-icons/fa";
import { GlobalContext } from "../../Context/GlobalProvider";

const Search = () => {
   const { icons, inputIcons, setInputIcons} = useContext(GlobalContext);
   const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);


    const handleSubmit = e =>{
    e.preventDefault()
    console.log(inputIcons)
  } 

   useEffect(()=>{
    const filterIcon = icons.filter(
      (icon) =>
        searchValue.toLowerCase() === icon.category ||
        searchValue.slice(0, 1).toUpperCase() + searchValue.slice(1).toLowerCase() ===
          icon.category
    );
    setInputIcons(filterIcon);
    setFilteredData(filterIcon);
   },[searchValue,icons,setInputIcons]) 

   const handleChange = (e) => {
     const value = e.target.value;
     setSearchValue(value)
   }; 
   
  return (
    <div className=" w-11/12 lg:w-9/12 mx-auto mt-4 relative">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="Type here"
          className="border-solid border-2 border-[#183153] px-12 py-5 rounded-full  w-full hover:outline outline-offset-2 outline-sky-500"
        />
        <FaSearch className="absolute bottom-6 left-6 text-[18px] text-slate-800" />
      </form>
    </div>
  );
};

export default Search;
