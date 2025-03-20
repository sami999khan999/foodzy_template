"use client";

import { specialDishesData } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const SpecialDishes = () => {
  return (
    <div className="wrapperlg xl:px-36 md:px-12 space-y-10">
      <div className="text-center lg:text-left space-y-10">
        <p className="title">Special Dishes</p>
        <h1 className="md:w-[40rem] ">Standout Dishes From Our Menu</h1>
      </div>

      <Carousel>
        <CarouselContent className="lg:ml-5 ml-0.5 py-10 gap-4">
          {specialDishesData.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 lg:basis-1/3 md:basis-1/2"
            >
              <SpecialDishesCar {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -top-16 right-16 lg:flex w-[6rem] gap-2 hidden ">
          <CarouselPrevious className="text-2xl bg-primary p-7 text-background disabled:bg-gray-200 disabled:text-muted-foreground">
            <MdArrowBackIosNew />
          </CarouselPrevious>
          <CarouselNext className="text-2xl bg-primary p-7 text-background disabled:bg-gray-200 disabled:text-muted-foreground">
            <MdArrowForwardIos />
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
};

export default SpecialDishes;

type SpecialDish = {
  title: string;
  subtitle: string;
  isFavorite: boolean;
  image: string;
};

export const SpecialDishesCar = (item: SpecialDish) => {
  const [isFavorite, setIsFavorite] = useState(item.isFavorite);

  return (
    <div className="lg:max-w-[446px] w-full max-h-[523px] border border-border-color rounded-2xl p-8 space-y-6 custom-shadow pb-[6rem] relative overflow-hidden">
      <div className="w-full flex items-center justify-center">
        <div className="relative h-[276px] aspect-square">
          <Image
            src={item.image}
            objectFit="cover"
            layout="fill"
            alt={item.title}
          />
        </div>
      </div>

      <button
        className="absolute top-0 right-0 bg-primary p-8 rounded-bl-[2.5rem] text-background text-2xl"
        onClick={() => setIsFavorite((prev) => !prev)}
      >
        {isFavorite ? <FaRegHeart /> : <FaHeart />}
      </button>

      <div>
        <p className="text-muted text-[30px] font-bold line-clamp-1">
          {item.title}
        </p>
        <p className="text-muted/70 text-xl font-semibold line-clamp-1">
          {item.subtitle}
        </p>
      </div>
    </div>
  );
};
