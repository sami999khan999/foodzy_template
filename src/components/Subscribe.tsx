import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrSend } from "react-icons/gr";
import { Button } from "./ui/button";
import Services from "./Services";

const Subscribe = () => {
  return (
    <div className="wrapperlg space-y-8">
      <div
        className="bg-muted flex flex-col lg:flex-row gap-8 justify-between pt-[5rem] font-quicksand rounded-3xl overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, #cdb87a8f 0%, transparent 90%)",
        }}
      >
        <div className="lg:pl-[4rem] px-5 lg:px-0 space-y-8">
          <h2 className="text-foreground lg:w-[40rem] w-full text-center lg:text-left text-[40px]">
            Stay home & get your daily needs from our shop
          </h2>
          <div className="text-lg text-foreground/60 flex gap-2.5 items-center justify-center lg:justify-start">
            <p>{`${"Start You'r Daily Shopping with"}`}</p>
            <Link href={"/"} className="text-secondary hover:underline">
              Nest Mart
            </Link>
          </div>
          <div className="bg-background lg:w-[30rem] flex items-center justify-between h-16 rounded-full lg:px-[2rem] px-4">
            <div className="flex items-center gap-4">
              <GrSend className="text-muted-foreground/50 text-xl" />
              <input
                type="text"
                className="border-0 outline-0"
                placeholder="Your E-mail Address"
              />
            </div>
            <Button className="h-full lg:px-10 rounded-full bg-primary/80 text-foreground font-semibold text-base tracking-wider">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="relative md:w-[634px] w-full h-[345px]">
          <Image
            src={"/subscribe.png"}
            objectFit="contain"
            layout="fill"
            alt="Subscribe"
          />
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Subscribe;
