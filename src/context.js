import React, { useContext, useState, useEffect } from "react";
const url = "https://www.thesportsdb.com/api/v1/json/2/all_sports.php";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [sports, setSports] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const fetchSports = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const { sports } = data;
    setSports(sports);
    setLoading(false);
  };
  useEffect(() => {
    fetchSports();
  }, []);
  return (
    <AppContext.Provider
      value={{ loading, sports, setSports, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
