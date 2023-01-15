import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { AppContext } from "../../context/context";

const Hero = () => {
  useEffect(() => {
    const input = document.querySelector("input");
    input.focus();
  }, []);
    const hideMenu = () => {
      setShowMenu(false);
    };
  const {showMenu,setShowMenu}=useContext(AppContext)
  return (
    <div onClick={hideMenu} className="flex w-full flex-col items-center justify-center border">
      <Image
        width={100}
        height={100}
        alt=""
        className="mb-4 rounded-full"
        src={
          "https://res.cloudinary.com/devsteveserver/image/upload/v1659019979/profile_loza8q.png"
        }
      />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        Palm<span className="text-purple-700">Search</span>
      </h1>
      <div className="my-4 flex h-16 md:w-[450px] w-[320px] sm:w-[350px] items-center justify-center rounded-lg border-2 text-xl">
        <FaSearch className="mr-2 text-gray-500" />
        <input
          type="search"
          //   name="prompt"
          //   autoFocus="true"
          placeholder="What are you looking for?"
          className="h-10 w-[80%] sm:indent-2 outline-none"
        />
      </div>
    </div>
  );
};

export default Hero;
