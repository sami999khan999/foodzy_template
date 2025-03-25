export type CategoryType = {
  id: number;
  name: string;
  quantity: number;
};

export type PriceRangeType = {
  from: number;
  to: number;
};

export type ColorCategoryType = {
  id: number;
  name: string;
  value: string;
};

export type WeightCategoryType = {
  id: number;
  value: string;
  unit: string;
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
