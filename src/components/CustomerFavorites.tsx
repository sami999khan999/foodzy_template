import { customerFavoriteData } from "@/lib/data";
import Image from "next/image";
import React from "react";

const CustomerFavorites = () => {
  return (
    <div className="wrapperlg space-y-8 lg:space-y-16">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="title">Customer Favorites</p>
        <h1>Popular Catagories</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full gap-8">
        {customerFavoriteData.map((item, i) => (
          <CustomerFavoriteCart key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CustomerFavorites;

type CustomerFavoriteType = {
  title: string;
  image: string;
  quantity: number;
};

const CustomerFavoriteCart = (item: CustomerFavoriteType) => {
  return (
    <div className="h-[280px] aspect-square bg-background custom-shadow rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:shadow-2xl duration-300">
      <div className="h-[100px] bg-primary/5 rounded-full flex items-center justify-center overflow-hidden aspect-square">
        <div className="relative h-[60px] aspect-square">
          <Image
            src={item.image}
            objectFit="cover"
            layout="fill"
            alt={item.title}
          />
        </div>
      </div>
      <div className="text-center">
        <p className="lg:text-3xl text-xl text-muted font-semibold">
          {item.title}
        </p>
        <p className="text-muted-foreground/80 font-medium text-2xl ">{`(${item.quantity} items)`}</p>
      </div>
    </div>
  );
};
