import React, { use, useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext.jsx";
import Title from "../title/Title.jsx";
import ProductItem from "../productItem/ProductItem.jsx";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const relatedProducts = products.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );
      setRelated(relatedProducts);
    }
  }, [products, category, subCategory]);
  return <div className="mt-12">
    <div className="flex justify-center py-8 text-3xl">
      <Title text1={"RELATED"} text2={"PRODUCTS"}/>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
      {related.slice(0 , 5).map((item , index) => {
        return (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        )
      })}

    </div>
  </div>;
};

export default RelatedProducts;
