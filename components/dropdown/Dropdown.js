import React from "react";
import Link from "next/link";
import { links } from "../../constants/links";

const Dropdown = () => {
  return (
    <div className="absolute right-24 top-16 rounded-md border ">
      {links.map((link) => (
        <div key={link.name}>
          <Link
            href={link.link}
            style={{ borderBottom: `${link.border}` }}
            className="flex cursor-pointer items-center bg-white px-4 py-2 text-xl font-medium  capitalize"
          >
            <link.icon style={{ color: `${link.color}` }} className="mr-1" />{" "}
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
