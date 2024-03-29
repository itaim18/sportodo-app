import React, { useContext, useState, useEffect } from "react";
const url = "https://sports.api.decathlon.com/sports";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [sports, setSports] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubmenu, setIsSubmenu] = useState(false);
  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const fetchSports = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const { data: sports } = data;
    setSports(sports);
    setLoading(false);
  };
  useEffect(() => {
    fetchSports();
  }, []);
  return (
    <AppContext.Provider
      value={{
        loading,
        sports,
        setSports,
        searchTerm,
        setSearchTerm,
        isSubmenu,
        setIsSubmenu,
        modalData,
        setModalData,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
