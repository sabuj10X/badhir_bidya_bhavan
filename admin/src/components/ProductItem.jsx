import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { Trash } from "lucide-react";
const ProductItem = ({ id, image, name, price, category , handleDelete }) => {
  return (
    <div>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt={name}
        />
      </div>
      <div className="flex gap-4 justify-between items-center">
        <div>
          <p className="pt-3 pb-1 text-sm">Name: {name}</p>
          <p className=" pb-1 text-sm">Cat: {category}</p>
          <p className="text-sm font-medium">₹{price}</p>
        </div>
        <div className="text-sm">
          <Trash onClick={() => (handleDelete(id))} className="text-xl cursor-pointer text-red-400"/>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
