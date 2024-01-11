import {  FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className=" w-11/12 lg:w-9/12 mx-auto mt-4 relative">
      <form>
        <input
          type="text"
          name=""
          id=""
          placeholder="Type here"
          className="border-solid border-2 border-[#183153] px-12 py-5 rounded-full  w-full hover:outline outline-offset-2 outline-sky-500"
        />
        <FaSearch className="absolute bottom-6 left-6 text-[18px] text-slate-800" />
      </form>
    </div>
  );
};

export default Search;
