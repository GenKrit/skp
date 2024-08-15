import React from "react";
import { Link } from "react-router-dom";

const FeatureCard = ({Cards = []}) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
           Product
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
         Select Categories
          </h1>
        </div>
        <div className="flex flex-wrap lg:place-content-center  -m-4">
          {Cards?.map((card) => {
            return (
              <Link to={`/categories/${card.url}`} className="lg:p-4 p-2 md:w-1/4  cursor-pointer">
                <div className="flex rounded-lg  bg-gray-100 p-2 lg:p-4 flex-col">
                  <div className="flex items-center  lg:h-full ">
                    <div className="w-6 h-6 mr-1 lg:mr-3 inline-flex  items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-sm lg:text-lg title-font font-medium">
                      {card.name}
                    </h2>
                   
                    
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
