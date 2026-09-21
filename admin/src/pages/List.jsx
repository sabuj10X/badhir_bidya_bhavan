import React, { useEffect } from 'react'
import { useAuthStore } from '../store/useAuthstore.js';
import Title from '../components/Title.jsx';
import ProductItem from '../components/ProductItem.jsx';
const List = () => {
  const {productList, getProducts , removeProduct} = useAuthStore();

  useEffect(() => {
    getProducts();
  }, []);
  const handleDelete = (id) => {
    removeProduct(id);
    getProducts();
  }
  
  return (
    <div className='px-4 sm:px-6 lg:px-8 py-6'>
      <div className='text-xl'>
        <Title text1={"List"} text2={"Products"}/>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6'>
        {
          productList.map((item , index) => (
            <ProductItem id={item._id} key={index} image={item.image} name={item.name} price={item.price} category={item.category} handleDelete={handleDelete}/>
          ))
        }
      </div>
    </div>
  )
}

export default List;
