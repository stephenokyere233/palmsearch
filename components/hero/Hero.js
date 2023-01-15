import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center border">
      <Image
        width={100}
        height={100}
        alt=""
        className="rounded-full mb-4"
        src={
          "https://res.cloudinary.com/devsteveserver/image/upload/v1659019979/profile_loza8q.png"
        }
      />
      <h1 className="text-6xl font-bold">
        Palm<span className="text-purple-700">Search</span>
      </h1>
      <div className="my-4 border w-[400px] h-16 flex justify-center items-center">
        <input type="text" name="prompt" className="border outline-none  w-[80%] h-10" />
      </div>
    </div>
  );
};

export default Hero;
