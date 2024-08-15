import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/productCard';
import Header from "../../components/header";

const categoryProducts = () => {
    const {name} = useParams([]);

    const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://dummyjson.com/products/category/${name}`);
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);
  return (<><Header/>
   <ProductCard products={products}/>
  </>
  )
}

export default categoryProducts
