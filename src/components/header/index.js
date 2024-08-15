import React, { useEffect ,useContext} from 'react';
import { Link } from 'react-router-dom';
// import image from './Psgpraveen.png';
// import { useLocation } from 'react-router-dom';
import {Data} from '../Context/Index'

const header = ( ) => {

  const navigations = [
    {
      name: 'Home',
      path: '/home',
    },
    {
      name: 'Products',
      path: '/products',
    }
    
  ];
 
  // const location = useLocation();
  const da = useContext(Data)
  

  useEffect(() => {
    console.log(da);
  }, [])

  return (
    <header className="text-gray-600 p1 body-font">
      <div className="container cursor-pointer mx-auto flex justify-between flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex justify-between font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/master/w_1920,c_limit/shouts-animals-watch-baby-hemingway.jpg" className='mix-blend-plus-darker' width={100} height={100} alt="Logo" />
          {/* <span className="ml-3 text-xl">Psg E-commerce</span> */}
        </Link>
        <nav className=" flex flex-wrap items-center text-base justify-center">
          {
            navigations.map((navigation) => (
              <Link to={navigation.path} className="mr-5 hover:text-gray-900" key={navigation.name}>
                {navigation.name}
              </Link>
            ))
          }
        </nav>
        <Link to={'/cart'} className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">
          Go to Cart
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
        

          <span className="mx-2 p2 my-4 text-2xl border-2 p-2 border-gray-100 rounded-full">{da.da?.user?.name || da.da?.name}</span>
     
      </div>
    </header>
  );
};

export default header;
