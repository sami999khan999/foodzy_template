"use client";

import { productData } from "@/lib/data";
import { useSearchParams } from "next/navigation";
import React from "react";

const ProductPageContent = () => {
  const searchParams = useSearchParams();

  const category = decodeURIComponent(searchParams.get("category") || "");
  const price = decodeURIComponent(searchParams.get("price") || "");
  const color = decodeURIComponent(searchParams.get("color") || "");
  const weight = decodeURIComponent(searchParams.get("weight") || "");
  const tag = decodeURIComponent(searchParams.get("tag") || "");

  const filteredProduct = productData.filter((product) => {
    if (!category && !price && !color && !weight && !tag) return true;

    return (
      (category && product.category === category) ||
      (price && product.price <= Number(price)) ||
      (color &&
        product.color.toLocaleLowerCase() === color.toLocaleLowerCase()) ||
      (weight && product.weight.value <= Number(weight.split("+")[0])) ||
      (tag && product.tag === tag)
    );
  });

  console.log(filteredProduct);

  return <div>ProductPageContent</div>;
};

export default ProductPageContent;
