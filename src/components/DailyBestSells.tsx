import { dailyBestSellsData } from "@/lib/data";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const DailyBestSells = () => {
  return (
    <div className="wrapperlg space-y-10">
      <h2>Daily Best Sells</h2>
      <div className="flex flex-col lg:flex-row justify-between gap-6 overflow-x-hidden ">
        <div className="relative h-[520px] lg:w-[378px] w-full rounded-xl overflow-hidden shrink-0">
          <Image
            src={"/daily-best-sells.png"}
            layout="fill"
            objectFit="cover"
            alt="Daily Best Sells"
          />
          <div className="absolute inset-0 bg-[#E5DC8942] p-14">
            <p className="text-background text-[40px] font-semibold font-quicksand leading-snug">
              Bring nature into your home
            </p>

            <Button className="text-foreground/90 hover:bg-secondary hover:text-muted mt-20 duration-300">
              Shop Now
              <IoIosArrowRoundForward />
            </Button>
          </div>
        </div>

        <Carousel className="2xl:w-[75%] lg:w-[65%]  w-full ">
          <CarouselContent className="">
            {dailyBestSellsData.map((item, index) => (
              <CarouselItem
                key={index}
                className="lg:basis-1/2 xl:basis-1/3 md:basis-1/2 2xl:basis-1/4  w-full"
              >
                <DailyBestSellsCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute p-3 left-9 bg-foreground border-border-color">
            <FaArrowLeftLong />
          </CarouselPrevious>
          <CarouselNext className="absolute p-3 right-9 bg-foreground border-border-color">
            <FaArrowRightLong />
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
};

export default DailyBestSells;

type DailyBestSellItem = {
  title: string;
  stars: number;
  price: string;
  priceAfterDiscount: string;
  stock: number;
  sold: number;
  seller: string;
  tag: string;
  tagColor: string;
  image: string;
};

const DailyBestSellsCard = (item: DailyBestSellItem) => {
  return (
    <div className="py-4 border border-border-color rounded-2xl flex flex-col justify-center items-center h-[520px] w-full shrink-0 relative overflow-hidden">
      <div className="relative w-[226px] aspect-square">
        <Image
          src={item.image}
          layout="fill"
          objectFit="cover"
          alt={item.title}
        />
      </div>

      <div
        className={`absolute top-0 left-0 text-sm text-background px-4 py-2 rounded-br-2xl`}
        style={{ backgroundColor: item.tagColor }}
      >
        {item.tag}
      </div>

      <div className="px-5 w-full flex flex-col h-full">
        <div className="space-y-2">
          <p className="text-primary-foreground/60 text-sm">{item.seller}</p>
          <p className="text-lg text-muted-foreground font-semibold line-clamp-2">
            {item.title}
          </p>

          {/* Star Ratings */}
          <div className="flex gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) =>
              i < item.stars ? (
                <FaStar key={i} />
              ) : (
                <FaRegStar key={i} className="text-gray-300" />
              )
            )}
          </div>
        </div>

        <div className="mt-auto space-y-3">
          <div className="flex items-center gap-2 mt-2">
            <p className="text-secondary font-bold text-lg">
              ${item.priceAfterDiscount}
            </p>
            <p className="text-gray-400 line-through text-sm">${item.price}</p>
          </div>
          <div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary"
                style={{
                  width: `${(item.sold / item.stock) * 100}%`,
                }}
              ></div>
            </div>

            <span className="text-sm text-muted-foreground">
              Sold: {item.sold}/{item.stock}
            </span>
          </div>

          <Button className="w-full text-foreground cursor-pointer">
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
