import React from "react";
import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";
































export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp2</h1>
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />
      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
