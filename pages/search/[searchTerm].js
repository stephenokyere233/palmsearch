import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import Dropdown from "../../components/dropdown/Dropdown";
import { AppContext } from "../../context/context";

const SearchResult = () => {
  const {
    showMenu,
    setShowMenu,
    handleSubmit,
    toggleMenu,
    hideMenu,
    searchTerm,
    handleChange,
  } = useContext(AppContext);
  return (
    <div className="flex min-h-screen w-full flex-col ">
      <header className="flex items-center justify-between px-4 md:px-[2em]">
        <h2 className="text-2xl font-medium">
          Palm<span className="text-purple-700">Search</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="my-4 flex h-16 w-[320px] items-center justify-center rounded-lg border-2 text-xl sm:w-[350px] md:w-[450px]"
        >
          <FaSearch className="mr-2 text-gray-500" />
          <input
            type="search"
            value={searchTerm}
            name="search"
            onChange={handleChange}
            placeholder="What are you looking for?"
            className="h-10 w-[80%] outline-none sm:indent-2"
          />
        </form>
        <div>
          <button
            onClick={toggleMenu}
            className="hidden rounded-md border  bg-purple-700 p-2 font-medium text-white md:block"
          >
            Need Help?
          </button>
          {showMenu && <Dropdown />}
        </div>
      </header>
      <div
        className="flex-1 border-2  border-red-500 px-4 md:px-[3em] lg:px-[6em]"
        onClick={hideMenu}
      >
        body
      </div>
    </div>
  );
};

export default SearchResult;
