import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import { v4 as uuidv4 } from "uuid";
import { useFetchGifs } from "./hooks/useFetchGifs";
import { Loading } from "./components/Loading";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);
 

  return (
    <>
     
      <h2 className="text-center">GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <div className="accordion mb-1 p-3" id={`accordionGifs`}>
        {categories.map((ele) => (
          <GifGrid category={ele} accordion={uuidv4()} key={ele} />
        ))}
      </div>
    </>
  );
};

export default GifExpertApp;
