import Image from "next/image";
import Link from "next/link";
import React from "react";

import { headerLogo } from "@/public/assets/images";
import { hamburger } from "@/public/assets/icons";
import { navLinks } from "@/constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image src={headerLogo} alt="logo" width={130} height={29} />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-monserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex space-x-5 font-bold max-lg:hidden">
          <p className="cursor-pointer">Sign In</p>
          <p>/</p>
          <p className="cursor-pointer">Expore Now</p>
        </div>
        <div className="hidden max-lg:block cursor-pointer">
          <Image src={hamburger} alt="" width={28} height={28} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
