import { useState } from "react";
import { data } from "./data";
import { pickOne } from "./utils";

const useRandomItem = () => {
  const categories = Object.keys(data);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentItem, setCurrentItem] = useState("");

  const pickRandom = () => {
    const randomCategory = pickOne(categories);
    const items = data[randomCategory];
    const randomItem = pickOne(items);
    setCurrentCategory(randomCategory);
    setCurrentItem(randomItem);
  };

  return {
    categories,
    currentCategory,
    currentItem,
    pickRandom
  };
};

export { useRandomItem };
