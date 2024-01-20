import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalProvider";


const ShowIcons = () => {
  const { styles, icons, inputIcons, category } = useContext(GlobalContext);
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let filteredData = [];

    switch (id) {
      case "classic":
        filteredData = icons.filter(
          (icon) => icon.style === "solid" || icon.style === "thin"
        );
        break;
      case "sharp":
        filteredData = icons.filter(
          (icon) => icon.style === "regular" || icon.style === "light"
        );
        break;
      case "brand":
        filteredData = icons.filter(
          (icon) =>
            icon.style === "regular" ||
            icon.style === "light" ||
            icon.style === "thin" ||
            icon.style === "solid"
        );
        break;
      case "free":
        filteredData = icons.filter((icon) => icon.style === id);
        break;
      case "solid":
        filteredData = icons.filter((icon) => icon.style === "solid");
        break;
      case "regular":
        filteredData = icons.filter((icon) => icon.style === "regular");
        break;
      case "thin":
        filteredData = icons.filter((icon) => icon.style === "thin");
        break;
      case "light":
        filteredData = icons.filter((icon) => icon.style === "light");
        break;
      case "alert":
        filteredData = icons.filter((icon) => icon.category === "Alert");
        break;
      case "alphabet":
        filteredData = icons.filter((icon) => icon.category === "Alphabet");
        break;
      case "communication":
        filteredData = icons.filter(
          (icon) => icon.category === "Communication"
        );
        break;
      case "business":
        filteredData = icons.filter((icon) => icon.category === "Business");
        break;
      case "map":
        filteredData = icons.filter((icon) => icon.category === "Map");
        break;
      case "social":
        filteredData = icons.filter((icon) => icon.category === "Social");
        break;
    }
    if (inputIcons.length > 0) {
      setData(inputIcons);
     
    } else {
      setData(filteredData);
    }
  }, [id, icons, inputIcons]);

 

  return (
    <div>
      
      <div
        className={`${
          styles === "roomy"
            ? "grid grid-cols-4 gap-3"
            : styles === "compact"
            ? "grid grid-cols-2 lg:grid-cols-5  gap-3"
            : "grid grid-cols-2 lg:grid-cols-5 gap-6 text-center"
        }`}
        >
        {data.map((icon, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center items-center shadow-sm hover:bg-orange-300 duration-300 ${
              styles === "roomy" ? "py-4" : "py-2"
            }`}
          >
            <img
              src={icon.image}
              className={`${
                styles === "roomy"
                  ? "w-12"
                  : styles === "compact"
                  ? "w-7"
                  : "w-10"
              }`}
            ></img>
            <p
              className={`font-medium ${
                styles === "roomy"
                  ? "p-4"
                  : styles === "compact"
                  ? "p-1"
                  : "p-2"
              }`}
            >
              {category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowIcons;  