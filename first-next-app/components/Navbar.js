import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div>
      {/* Logo */}
      <Image src="/Masynctech.png" width={50} height={50} alt="logo" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
