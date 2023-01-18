import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${searchTerm}`);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchTerm(value);
  };
  return (
    <AppContext.Provider
      value={{
        showMenu,
        setShowMenu,
        toggleMenu,
        hideMenu,
        searchTerm,
        setSearchTerm,
        handleSubmit,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
