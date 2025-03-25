import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import Logo from "./Logo";
import NavLink from "./NavLink";
import { FiPhone } from "react-icons/fi";
import { navLinks, phoneNumber } from "@/lib/data";
import Search from "./Search";
import { RxPerson } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="hidden lg:block">
      <div className="py-4 shadow-md">
        <div className="wrapper flex justify-between items-center">
          <div className="border border-border-color p-1 w-fit rounded-sm">
            <RiMenu2Fill size={25} />
          </div>
          <div className="space-x-10">
            {navLinks.map((item, i) => (
              <NavLink key={i} {...item} />
            ))}
          </div>
          <div className="flex gap-2 items-center hover:cursor-pointer">
            <FiPhone />
            <p>{phoneNumber}</p>
          </div>
        </div>
      </div>

      <div className="bg-foreground/10 sticky top-0 z-50 mb-0">
        <div className="wrapper py-2 flex gap-3 items-center justify-between">
          <Logo />
          <Search />
          <div className="flex items-center justify-center gap-5 text-lg font-medium tracking-wide">
            <div className="flex items-center justify-center gap-2 cursor-pointer">
              <RxPerson size={20} />
              <p>Account</p>
            </div>
            <div className="flex items-center justify-center gap-2 cursor-pointer">
              <FaRegHeart size={20} />
              <p>Wishlist</p>
            </div>
            <div className="flex items-center justify-center gap-2 cursor-pointer">
              <RiShoppingCartLine size={20} />
              <p>Cart</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
