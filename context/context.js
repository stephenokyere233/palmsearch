import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <AppContext.Provider
      value={{
        showMenu,
        setShowMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
