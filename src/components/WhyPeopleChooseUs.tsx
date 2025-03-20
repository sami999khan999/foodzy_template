import { faqData } from "@/lib/data";
import Image from "next/image";

const WhyPeopleChooseUs = () => {
  return (
    <div className="wrappermd flex flex-col xl:flex-row gap-20">
      <div className="relative h-[578px] lg:w-[578px] w-full rounded-2xl overflow-hidden shrink-0">
        <Image
          src={"/WhyPeopleChooseUs/main.png"}
          objectFit="cover"
          layout="fill"
          objectPosition="center"
          alt="Why People Choose Us"
        />
      </div>

      <div className="font-quicksand space-y-5">
        <h1 className="text-muted-foreground xl:text-5xl md:text-3xl text-3xl">
          Why People Choose us?
        </h1>
        <div className="space-y-8">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-4 items-center shadow-sm rounded-xl 2xl:w-[70%] md:w-[90%] h-fit cursor-pointer hover:outline outline-border-color duration-200"
            >
              <div className="p-4 w-fit rounded-full shadow-lg">
                <div className="relative w-[46px] aspect-square rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    objectFit="cover"
                    layout="fill"
                    objectPosition="center"
                    alt={item.title}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="lg:text-[26px] text-[22px] font-semibold">
                  {item.title}
                </p>
                <p className="lg:text-lg text-base text-muted/90 font-medium">
                  {item.describe}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyPeopleChooseUs;
