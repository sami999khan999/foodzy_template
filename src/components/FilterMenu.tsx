"use client";

import { useParamFilter } from "@/hooks/useFilter";
import { productFilterData } from "@/lib/data";
import { cn } from "@/lib/utils";
import React, { Suspense, useState } from "react";
import { TiTick } from "react-icons/ti";
import { Button } from "./ui/button";

const FilterMenu = () => {
  return (
    <div className="bg-foreground border border-border-color rounded-sm p-6 font-poppins">
      <Suspense fallback={<div>Loading...</div>}>
        <CategoryFilter />
        <PriceFilter />
        <ColorFilter />
        <WeightFilter />
        <TagFilter />
      </Suspense>
    </div>
  );
};

export default FilterMenu;

const FilterCategoryTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-lg font-semibold text-muted/70 border-b border-border-color pb-3">
      {children}
    </div>
  );
};

const CategoryFilter = () => {
  const { param, updateparam } = useParamFilter("category");

  return (
    <div>
      <FilterCategoryTitle>Product Category</FilterCategoryTitle>
      <div className="my-6 space-y-5">
        {productFilterData.categories.map((category) => (
          <div
            key={category.id}
            className="text-muted/60 flex justify-between items-center lg:text-base text-sm"
          >
            <div className="flex items-center gap-2">
              <div
                className="cursor-pointer"
                onClick={() => updateparam(category.name)}
              >
                {param === category.name ? (
                  <div className="w-5 aspect-square bg-primary text-background border border-border-color flex items-center justify-center rounded-sm">
                    <TiTick />
                  </div>
                ) : (
                  <div className="w-5 aspect-square bg-background border border-border-color rounded-sm"></div>
                )}
              </div>
              <p
                className={cn(
                  "capitalize",
                  param === category.name && "text-primary"
                )}
              >
                {category.name}
              </p>
            </div>
            <div className="tracking-wider">{`[${category.quantity}]`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PriceFilter = () => {
  const { param, updateparam } = useParamFilter("price");
  const [price, setPrice] = useState(param);

  return (
    <div>
      <FilterCategoryTitle>Filter By Price</FilterCategoryTitle>
      <div className="space-y-6 my-5">
        <div className="space-y-4">
          <input
            type="range"
            min={productFilterData.priceRange.min + 20}
            max={productFilterData.priceRange.max}
            step={10}
            value={price || productFilterData.priceRange.min}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full text-primary bg-primary"
          />
          <div className="flex gap-2">
            <p className="font-semibold text-muted tracking-wide">Price :</p>
            <p className="text-muted-foreground/80 font-bold">
              ${productFilterData.priceRange.min} - ${price}
            </p>
          </div>
        </div>
        <Button
          onClick={() => updateparam(price)}
          className="text-foreground px-6 rounded-sm tracking-wide"
        >
          Filter
        </Button>
      </div>
    </div>
  );
};

const ColorFilter = () => {
  const { param, updateparam } = useParamFilter("color");

  return (
    <div>
      <FilterCategoryTitle>Filter By Color</FilterCategoryTitle>
      <div className="my-6 space-y-5">
        {productFilterData.colorCategory.map((category) => (
          <div
            key={category.id}
            className="text-muted/60 flex justify-between items-center lg:text-base text-sm"
          >
            <div className="flex items-center gap-2">
              <div
                className="cursor-pointer"
                onClick={() => updateparam(category.name)}
              >
                {param === category.name ? (
                  <div
                    className="w-5 aspect-square text-background border border-border-color flex items-center justify-center rounded-sm"
                    style={{ backgroundColor: category.value }}
                  >
                    <TiTick />
                  </div>
                ) : (
                  <div className="w-5 aspect-square bg-background border border-border-color rounded-sm"></div>
                )}
              </div>
              <p
                className="capitalize"
                style={{ color: param === category.name ? category.value : "" }}
              >
                {category.name}
              </p>
            </div>
            <div
              className="w-5 aspect-square rounded-sm"
              style={{ backgroundColor: category.value }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const WeightFilter = () => {
  const { param, updateparam } = useParamFilter("weight");

  return (
    <div>
      <FilterCategoryTitle>Filter By weight</FilterCategoryTitle>
      <div className="my-6 space-y-5">
        {productFilterData.weightCategory.map((category) => (
          <div
            key={category.id}
            className="text-muted/60 flex justify-between items-center lg:text-base text-sm"
          >
            <div className="flex items-center gap-2">
              <div
                className="cursor-pointer"
                onClick={() => {
                  updateparam(category.value);
                }}
              >
                {param.split("+")[0] === category.value ? (
                  <div className="w-5 aspect-square bg-primary text-background border border-border-color flex items-center justify-center rounded-sm">
                    <TiTick />
                  </div>
                ) : (
                  <div className="w-5 aspect-square bg-background border border-border-color rounded-sm"></div>
                )}
              </div>
              <p
                className={cn(
                  "capitalize",
                  param === category.value && "text-primary"
                )}
              >
                {category.value} Pack
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TagFilter = () => {
  const { param, updateparam } = useParamFilter("tag");

  return (
    <div>
      <FilterCategoryTitle>Filter By Tags</FilterCategoryTitle>
      <div className="flex flex-wrap my-6 gap-3">
        {productFilterData.categoryTags.map((tag) => (
          <div
            key={tag.id}
            className={cn(
              "bg-background border border-border-color px-3 py-2 capitalize text-muted/60 cursor-pointer hover:text-primary font-medium rounded-sm",
              {
                "bg-muted-foreground/10": param === tag.name,
              }
            )}
            onClick={() => updateparam(tag.name)}
          >
            {tag.name}
          </div>
        ))}
      </div>
    </div>
  );
};
