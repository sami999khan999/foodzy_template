import FilterMenu from "@/components/FilterMenu";
import FilterMenuMobile from "@/components/FilterMenuMobile";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lg:flex wrapper lg:my-[6rem] my-10 gap-8">
      <div className="hidden lg:block w-[23%]">
        <FilterMenu />
      </div>
      <FilterMenuMobile>
        <FilterMenu />
      </FilterMenuMobile>
      {children}
    </div>
  );
};

export default layout;
