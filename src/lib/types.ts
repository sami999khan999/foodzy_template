export type CategoryType = {
  id: number;
  name: string;
  quantity: number;
};

export type PriceRangeType = {
  min: number;
  max: number;
};

export type ColorCategoryType = {
  id: number;
  name: string;
  value: string;
};

export type WeightCategoryType = {
  id: number;
  value: string;
};

export type TagType = {
  id: number;
  name: string;
};

export type ProductFilterDataType = {
  categories: CategoryType[];
  priceRange: PriceRangeType;
  colorCategory: ColorCategoryType[];
  weightCategory: WeightCategoryType[];
  categoryTags: TagType[];
};

interface Product {
  id: number;
  title: string;
  tag: string;
  price: number;
  priceAfterDiscount: number;
  stars: number;
  weight: {
    value: number;
    unit: string;
  };
  color: string;
  category: string;
  image: string;
}

export type ProductData = Product[];
