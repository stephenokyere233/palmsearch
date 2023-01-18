import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { AppContext } from "../../context/context";
import { useRouter } from "next/router";

const Hero = () => {
  useEffect(() => {
    const input = document.querySelector("input");
    input.focus();
  }, []);
  const router = useRouter();

  const {
    searchTerm,
    setSearchTerm,
    showMenu,
    hideMenu,
    handleSubmit,
    handleChange,
  } = useContext(AppContext);

  return (
    <div
      onClick={hideMenu}
      className="flex w-full flex-col items-center justify-center border-y-2"
    >
      <Image
        width={100}
        height={100}
        alt=""
        className="mb-4 rounded-full"
        src={
          "https://res.cloudinary.com/devsteveserver/image/upload/v1659019979/profile_loza8q.png"
        }
      />
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
        Palm<span className="text-purple-700">Search</span>
      </h1>
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
    </div>
  );
};

export default Hero;
