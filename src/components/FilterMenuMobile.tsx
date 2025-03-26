import React from "react";

const FilterMenuMobile = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative lg:hidden">
      <div className="absolute top-0 left-0 w-full">
        <div>d</div>
        <div className="w-full shadow-lg">{children}</div>
      </div>
    </div>
  );
};

export default FilterMenuMobile;
