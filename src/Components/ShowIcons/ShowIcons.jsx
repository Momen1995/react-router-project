import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalProvider";
import ErrorPage from "../ErrorPage/ErrorPage";

export default function ShowIcons() {
  const { styles, icons, inputIcons, filteredData, selectedSorting } =
    useContext(GlobalContext);
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
            icon.style === "thin" ||
            icon.style === "solid" ||
            icon.style === "regular" ||
            icon.style === "light"
        );
        break;
      case "free":
        filteredData = icons.filter((icon) => icon.style === id);
        break;
      case "solid":
      case "regular":
      case "thin":
      case "light":
        filteredData = icons.filter((icon) => icon.style === id);
        break;
      case "alert":
      case "alphabet":
      case "communication":
      case "business":
      case "map":
      case "social":
        filteredData = icons.filter(
          (icon) => icon.category === id.charAt(0).toUpperCase() + id.slice(1)
        );
        break;
    }

    if (selectedSorting === "Alphabetical") {
      filteredData = [...filteredData].sort((a, b) => b.id - a.id);
    }


    if (inputIcons?.length > 0) {
      setData(inputIcons);
    } else {
      setData(filteredData);
    }
  }, [id, icons, inputIcons, selectedSorting]);


   if (data.length === 0 ) return <ErrorPage />;

  return (
    <div>
      <h3 className="text-left font-medium capitalize mb-5">
        {id} : {data?.length}
      </h3>
      <div
        className={`${
          styles === "roomy"
            ? "grid grid-cols-4 gap-3"
            : styles === "compact"
            ? "grid grid-cols-1 lg:grid-cols-5  gap-3"
            : styles === "cheetsheet"
            ? "grid grid-cols-1 lg:grid-cols-6 gap-8 text-center"
            : "grid grid-cols-1 lg:grid-cols-5 gap-8 text-center"
        }`}
      >
        {data.map((icon, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center items-center shadow hover:bg-orange-300 duration-300 ${
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
                  : styles === "cheetsheet"
                  ? "w-10"
                  : "w-10"
              }`}
            ></img>
            <p
              className={`font-medium ${
                styles === "roomy"
                  ? "w-12"
                  : styles === "compact"
                  ? "w-7"
                  : styles === "cheetsheet"
                  ? "w-10 "
                  : "w-10"
              }`}
            >
              {icon.category}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  );
}
