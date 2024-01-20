import { Link } from "react-router-dom";
import { FaAdjust, FaAngular, FaMapMarkerAlt } from "react-icons/fa";
import { FaCircle, FaMessage } from "react-icons/fa6";
import { PiCircleHalfThin, PiCircleLight, PiBagDuotone } from "react-icons/pi";
import { AiFillAlert } from "react-icons/ai";
import { MdSocialDistance } from "react-icons/md";


const IconColumn = () => {

  return (
    <div>
      <nav>
        <p className="text-xl font-semibold mb-4">Style</p>
        <div className="flex lg:flex-col gap-1 font-medium">
          <Link
            to="/solid"
            className="font-normal text-sm flex items-center gap-2 hover:outline outline-1 outline-gray-400 rounded-lg px-2 py-2 duration-300"
          >
            
            <FaCircle />  
            Solid
          </Link>
          <Link
            to="/regular"
            className="font-normal text-sm hover:outline outline-1 outline-gray-400 rounded-lg px-2 py-2 duration-300 flex items-center gap-2"
          >
            <FaAdjust />
            Regular
          </Link>
          <Link
            to="/thin"
            className="font-normal flex items-center gap-2 text-sm hover:outline outline-1 outline-gray-400 rounded-lg px-2 py-2 duration-300"
          >
            <PiCircleHalfThin />
            Thin
          </Link>
          <Link
            to="/light"
            className="font-normal text-sm flex items-center gap-2 hover:outline outline-1 outline-gray-400 rounded-lg px-2 py-2 duration-300"
          >
            <PiCircleLight />
            Light
          </Link>
        </div>

        <p className="text-xl font-semibold mt-6 mb-2">Feature</p>
        <div className="flex lg:flex-col gap-3 font-medium">
          <Link
            to="/alert"
            className="font-normal text-sm flex items-center gap-2  hover:outline outline-1 outline-gray-400 rounded-lg px-2 py-2 duration-300"
          >
            <AiFillAlert />
            Alert
          </Link>
          <Link
            to="/alphabet"
            className="font-normal text-sm flex items-center gap-2  hover:outline outline-1 outline-gray-400 rounded-lg px-2 py-2 duration-300"
          >
            <FaAngular />
            Alphabet
          </Link>
          <Link
            to="/communication"
            className="font-normal text-sm flex items-center gap-2 hover:outline outline-1 outline-gray-400 rounded-lg px-2 py-2 duration-300"
          >
            <FaMessage />
            Communication
          </Link>
          <Link
            to="/business"
            className="font-normal text-sm flex items-center gap-2  hover:outline outline-1 outline-gray-400 rounded-lg px-2 py-2 duration-300"
          >
            <PiBagDuotone />
            Business
          </Link>
          <Link
            to="/map"
            className="font-normal text-sm flex items-center gap-2 hover:outline outline-1 outline-gray-400 rounded-lg px-2 py-2 duration-300"
          >
            <FaMapMarkerAlt />
            Map
          </Link>
          <Link
            to="/social"
            className="font-normal text-sm flex items-center gap-2 hover:outline outline-1 outline-gray-400 rounded-lg px-2 py-2 duration-300"
          >
            <MdSocialDistance />
            Social
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default IconColumn;