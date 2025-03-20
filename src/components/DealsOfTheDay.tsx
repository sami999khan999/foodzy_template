import { dealsOfTheDayData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { GrCart } from "react-icons/gr";
import { MdArrowForwardIos, MdStar } from "react-icons/md";

const DealsOfTheDay = () => {
  return (
    <div className="wrapperlg space-y-8">
      <div className="flex justify-between">
        <h2>Deals Of The Day</h2>
        <Link
          href={"/"}
          className="flex items-center gap-2 text-muted-foreground/80 hover:gap-4 duration-300 ease-in-out hover:text-primary"
        >
          All Deals <MdArrowForwardIos />
        </Link>
      </div>
      <div className="grid grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8 w-full">
        {dealsOfTheDayData.map((item, i) => (
          <DealsOfTheDayCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DealsOfTheDay;

type DealsOfTheDayType = {
  title: string;
  seller: string;
  price: number;
  priceAfterDiscount: number;
  image: string;
  stars: number;
};

const DealsOfTheDayCard = (item: DealsOfTheDayType) => {
  return (
    <div className="h-[450px]">
      <div className="relative w-full ">
        <div className="relative h-[335px] rounded-2xl overflow-hidden">
          <Image
            src={item.image}
            objectFit="cover"
            layout="fill"
            objectPosition="center"
            alt={item.title}
          />
        </div>
        <div className="w-[80%] hover:scale-115 duration-300 h-[192px] bg-background rounded-xl custom-shadow p-7 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-50 flex flex-col justify-between">
          <div>
            <p className="font-semibold text-muted-foreground line-clamp-2">
              {item.title}
            </p>
            <div className="flex items-center text-lg">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) =>
                  i < item.stars ? (
                    <MdStar key={i} className="text-yellow-500" />
                  ) : (
                    <MdStar key={i} className="text-gray-200" />
                  )
                )}
              </div>
              <p className="text-muted-foreground/70 text-sm">
                ({item.stars}.0)
              </p>
            </div>
            <p className="text-sm text-muted-foreground/70">
              By{" "}
              <span className="text-secondary hover:underline cursor-pointer">
                {item.seller}
              </span>
            </p>
          </div>
          <div className="flex justify-between mt-auto">
            <div className="flex items-center gap-3 font-semibold">
              <p className="text-secondary">${item.priceAfterDiscount}</p>
              <p className="text-muted-foreground/70 text-sm line-through">
                ${item.price}
              </p>
            </div>
            <button className="bg-primary flex gap-2 items-center justify-center px-5 py-2 text-sm text-foreground rounded-md cursor-pointer hover:bg-secondary duration-100">
              <GrCart /> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
