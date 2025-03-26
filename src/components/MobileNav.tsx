"use client";

import { navLinks } from "@/lib/data";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { RiMenu2Fill, RiShoppingCartLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import Logo from "./Logo";
import NavLink from "./NavLink";
import Search from "./Search";
import { Sheet, SheetContent, SheetFooter, SheetHeader } from "./ui/sheet";

const MobileNav = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <div className="bg-foreground/30 shadow-md flex justify-between items-center px-2">
        <Logo />
        <div
          className="border border-border-color p-1 w-fit rounded-sm"
          onClick={() => setIsSheetOpen(true)}
        >
          <RiMenu2Fill size={25} />
        </div>
      </div>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="text-muted px-2">
          <SheetHeader>
            <Logo />
          </SheetHeader>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {navLinks.map((item, i) => (
              <div
                key={i}
                className="border rounded-full border-border-color px-3 py-1"
              >
                <NavLink {...item} />
              </div>
            ))}
          </div>

          <Search />

          <div className="flex flex-col items-center justify-center gap-5 text-lg font-medium tracking-wide mt-12">
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
          <SheetFooter>
            <button
              onClick={() => setIsSheetOpen(false)}
              className="text-primary"
            >
              Close
            </button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
