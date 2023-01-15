import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-20 flex justify-center items-center">
      Made with 💙 by <Link className="ml-1" href="/">dev__steve</Link>
    </div>
  );
};

export default Footer;
