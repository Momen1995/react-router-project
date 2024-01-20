import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalProvider";


const AllIcons = () => {
  const {icons} = useContext(GlobalContext)
  return (
    <div>
      <h3 className="text-[#183153] font-semibold text-xl">{icons.length} Icons</h3>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center shadow-sm py-2 hover:bg-orange-300 duration-300"
          >
            <img src={icon?.image} className="w-10"></img>
            <p className="font-medium p-2">{icon?.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllIcons;