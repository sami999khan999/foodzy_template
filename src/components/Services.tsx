import { services } from "@/lib/data";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 justify-between font-quicksand gap-6">
      {services.map((item, i) => (
        <div
          key={i}
          className="flex gap-4 items-center px-6 py-4 bg-foreground w-full rounded-lg"
        >
          <div className="relative w-[60px] aspect-square">
            <Image
              src={item.image}
              objectFit="contain"
              layout="fill"
              objectPosition="center"
              alt={item.image}
            />
          </div>
          <div>
            <p className="text-xl font-semibold text-muted/90">{item.title}</p>
            <p className="text-muted-foreground/60">{item.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
