import React from "react";

const FilterMenuMobile = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <div className="lg:hidden w-full absolute top-0 left-0">{children}</div>
    </div>
  );
};

export default FilterMenuMobile;
