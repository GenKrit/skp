import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ products = [] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => {
            const { title, price, category, images, id } = product;
            return (
              <Link to={`/products/${id}`} className="lg:w-1/5 md:w-1/2 p-4 border border-opacity-60 p-2 ml-5 mb-3 cursor-pointer" key={id}>
                <div className="block relative h-48 rounded overflow-hidden">
                  <img alt={title} className="object-fill p-3 object-center w-full h-full block" src={images[0]} />
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font uppercase mb-1">{category}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                  <p className="mt-1 text-lg font-bold">${price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
