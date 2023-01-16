import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import Dropdown from "../dropdown/Dropdown";

const Navbar = () => {
  const { showMenu, setShowMenu } = useContext(AppContext);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
      const hideMenu = () => {
        setShowMenu(false);
      };
  return (
    <div  className="flex h-20 items-center justify-between px-4 md:px-[3em] lg:px-[6em]">
      <div onClick={hideMenu} className="flex items-center flex-1 h-full">

      <div className="text-2xl w-20 font-bold uppercase">logo</div>
      </div>
      <button
        onClick={toggleMenu}
        className="rounded-md  border bg-purple-700 p-2 font-medium text-white"
      >
        Need Help?
      </button>
      {showMenu && <Dropdown />}
    </div>
  );
};

export default Navbar;
