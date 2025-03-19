import CustomerFavorites from "@/components/CustomerFavorites";
import DailyBestSells from "@/components/DailyBestSells";
import React from "react";

const page = () => {
  return (
    <div className="space-y-[8rem]">
      <CustomerFavorites />
      <DailyBestSells />
    </div>
  );
};

export default page;
