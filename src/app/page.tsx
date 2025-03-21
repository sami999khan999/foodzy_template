import CustomerFavorites from "@/components/CustomerFavorites";
import DailyBestSells from "@/components/DailyBestSells";
import DealsOfTheDay from "@/components/DealsOfTheDay";
import SpecialDishes from "@/components/SpecialDishes";
import Subscribe from "@/components/Subscribe";
import WhyPeopleChooseUs from "@/components/WhyPeopleChooseUs";
import React from "react";

const page = () => {
  return (
    <div className="space-y-[8rem] mb-[5rem]">
      <CustomerFavorites />
      <DailyBestSells />
      <SpecialDishes />
      <DealsOfTheDay />
      <WhyPeopleChooseUs />
      <Subscribe />
    </div>
  );
};

export default page;
