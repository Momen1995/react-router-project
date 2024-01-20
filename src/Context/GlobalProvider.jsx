import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const [icons,setIcons] = useState([])
  const [inputIcons, setInputIcons] = useState(null);
  const [styles, setStyles] = useState([]);
  const [category, setCategory] = useState([]); 

  useEffect(() =>{
    const fetchIconData = async () =>{
      try{
        const response = await fetch('icons.json');
        const data = await response.json();
        setIcons(data)
      }catch(error){
        console.log('Error fetching Icon data:', error)
      }
    }
    fetchIconData();
  },[])
  return (
    <GlobalContext.Provider
      value={{
        icons,
        setIcons,
        inputIcons,
        setInputIcons,
        styles,
        setStyles,
        category,
        setCategory 
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;