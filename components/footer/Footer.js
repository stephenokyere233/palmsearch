import React from "react";
import Link from "next/link";
import { links } from "../../constants/links";

const Footer = () => {
  return (
    <div className="h-20 flex text-md justify-center font-medium items-center">
      Made with 💙 by <Link className="ml-1 font-bold" href={links[0].link}>dev__steve</Link>
    </div>
  );
};

export default Footer;
