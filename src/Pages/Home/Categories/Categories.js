import { useQuery } from "@tanstack/react-query";
import React from "react";
import EachCategory from "./EachCategory";

const Categories = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-7">
        {categories.map((category, i) => (
          <EachCategory key={i} category={category}></EachCategory>
        ))}
      </div>
    </div>
  );
};

export default Categories;
