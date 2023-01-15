import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import Dropdown from "../dropdown/Dropdown";

const Navbar = () => {
  const { showMenu, setShowMenu } = useContext(AppContext);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <div className="flex h-20 items-center justify-between px-4 md:px-[3em] lg:px-[6em]">
      <div className="text-2xl font-bold uppercase">logo</div>
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
