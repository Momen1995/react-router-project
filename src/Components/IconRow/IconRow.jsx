import { useContext, useState } from "react";
import {
  FaQrcode,
  FaGripHorizontal,
  FaBolt,
  FaCamera,
  FaCar,
  FaForward,
  FaRegFlag,
  FaAlignJustify,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalProvider";

const IconRow = () => {
  const {
    setStyles,
    selectedSorting,
    setSelectedSorting,
    versions,
    setVersions
  } = useContext(GlobalContext);
  

  const handleStyle = (style) => {
    setStyles(style);
  };

 const handleSortingChange = (sortingOption) => {
   setSelectedSorting(sortingOption);
 };

 const handleVesrionChange = (versionOption) =>{
  setVersions(versionOption)
 }

  return (
    <div>
      <div className="flex flex-col lg:flex lg:flex-row gap-3 justify-between mt-12 pb-4">
        <div className="flex gap-12 mx-auto lg:mx-0 lg:gap-20">
          <Link to="/classic">
            <div className="flex text-[16px] gap-1 text-sky-900 mb-4 justify-center  hover:text-[#146ebe]">
              <div>
                <FaCamera></FaCamera>
                <FaCar></FaCar>
              </div>
              <div>
                <FaBolt></FaBolt>
                <FaForward></FaForward>
              </div>
            </div>
            <p className="font-thin">Classic</p>
          </Link>
          <Link to="/sharp">
            <div className="flex text-[16px] gap-1 text-sky-900 justify-center  mb-4 hover:text-[#146ebe]">
              <div>
                <FaCamera></FaCamera>
                <FaCar></FaCar>
              </div>
              <div>
                <FaBolt></FaBolt>
                <FaForward></FaForward>
              </div>
            </div>
            Sharp 
          </Link>
          <Link to="/brand">
            <FaRegFlag className="flex text-3xl gap-1 mb-4 text-sky-900  hover:text-[#146ebe]" />
            Brand
          </Link>
          <Link to="/free">
            <FaBolt className="text-3xl mb-4 text-sky-900  hover:text-[#146ebe]"></FaBolt>
            Free
          </Link>
        </div>
        <div className="flex items-center gap-10 mx-auto lg:mx-0 mt-8 lg:mt-0">
          <div className="cursor-pointer" onClick={() => handleStyle("roomy")}>
            <FaQrcode className="text-4xl text-sky-900 hover:text-[#146ebe]"></FaQrcode>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => handleStyle("compact")}
          >
            <FaGripHorizontal className="text-4xl text-sky-900 hover:text-[#146ebe]"></FaGripHorizontal>
          </div>
          <div
            onClick={() => handleStyle("cheetsheet")}
            className="cursor-pointer"
          >
            <FaAlignJustify className="text-4xl text-sky-900 hover:text-[#146ebe]" />
          </div>
          <div>
            <select
              className="border-2 border-[#c3c6d1] px-3 py-2 rounded  hover:outline outline-offset-5 outline-sky-400 "
              value={selectedSorting}
              onChange={(e) => handleSortingChange(e.target.value)}
            >
              <option value="">Feature</option>
              <option value="Alphabetical">Alphabetical</option>
              <option value="Release">Release</option>
            </select>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default IconRow;