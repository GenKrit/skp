import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productCard";
import Categories from "../../components/categories";
import Header from "../../components/header";


const Pro = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      };
      fetchProducts();
    }, []);
 
  return (
    <div>
      <Header/>
    <Categories/>
    <div className="flex flex-col text-center w-full">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font m-3 origin-center">
          Product
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          All Popular Products
        </h1>
      </div>
    {
        products.length>0 ?
      <ProductCard products={products} />:
      <div>Loading...</div>
    }
    </div>
  );
};

export default Pro;
