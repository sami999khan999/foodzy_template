import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative 2xl:w-[90px] md:w-[70px] w-[60px] aspect-square">
        <Image src={"/logo.png"} layout="fill" objectFit="cove" alt="Logo" />
      </div>
      <div className="-space-y-0.5">
        <h2 className="2xl:text-3xl md:text-2xl text-lg font-bold">Foodzy</h2>
        <p className="font-semibold line-clamp-1 text-xs">
          {" "}
          A Treasure of Tastes
        </p>
      </div>
    </div>
  );
};

export default Logo;
