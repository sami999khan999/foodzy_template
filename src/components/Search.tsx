"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categoryData } from "@/lib/data";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = () => {
    console.log("Search Query:", searchQuery);
    console.log("Selected Category:", selectedCategory);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center h-12">
      <div className="border border-secondary/50 flex items-center rounded-sm lg:border-r-0 lg:rounded-l-md h-full">
        <input
          type="text"
          placeholder="Search for recipes..."
          className="w-full lg:w-[20rem] outline-0 px-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="border-l border-secondary/50 h-full"></div>

        <Select onValueChange={(value) => setSelectedCategory(value)}>
          <SelectTrigger className="2xl:w-40 w-full md:w-28 border-none shadow-none rounded-r-md">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent className="border border-border-color bg-background">
            {categoryData.map((category) => (
              <SelectItem
                key={category.name}
                value={category.name.toLowerCase()}
                className="font-medium hover:bg-secondary/20 duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="text-primary/80">{category.icon}</span>
                  <span>{category.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <button
        type="submit"
        className="w-full lg:w-auto text-background bg-muted h-full lg:rounded-l-none rounded-md px-4 hover:bg-primary duration-300 mt-3 lg:mt-0 py-1 lg:py-0 flex items-center justify-center"
        onClick={handleSearch}
      >
        <CiSearch size={22} />
      </button>
    </div>
  );
};

export default Search;
