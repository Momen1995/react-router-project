import {
  FaQrcode,
  FaGripHorizontal,
  FaBolt,
  FaCamera,
  FaCar,
  FaForward,
  FaRegFlag,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const IconRow = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex lg:flex-row gap-3 justify-between mt-16">
        <div className="flex gap-20">
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
        <div className="flex gap-6">
          <div className="cursor-pointer">
            <FaQrcode className="text-3xl text-sky-900 "></FaQrcode>
          </div>
          <div className="cursor-pointer">
            <FaGripHorizontal className="text-3xl text-sky-900 "></FaGripHorizontal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconRow;