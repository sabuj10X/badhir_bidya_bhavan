import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext.jsx";
import Title from "../title/Title.jsx";
import ProductItem from "../productItem/ProductItem.jsx";
const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = React.useState([]);
  React.useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div>
      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <div className="flex justify-center">
            <Title text1={"LATEST"} text2={"COLLECTION"} />
          </div>
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Our latest collection of products for you to choose from.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {latestProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
