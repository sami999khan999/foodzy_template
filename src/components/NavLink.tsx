import Link from "next/link";
import React from "react";

interface NavLinkProps {
  name: string;
  path: string;
}

const NavLink: React.FC<NavLinkProps> = ({ name, path }) => {
  return (
    <Link href={path} className="group relative inline-block">
      <span className="absolute inset-0 bg-secondary/50 scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100 rounded-sm" />

      <span className="relative text-muted/80 font-medium text-lg transition-colors duration-300 ease-in-out group-hover:text-muted px-2 ">
        {name}
      </span>
    </Link>
  );
};

export default NavLink;
