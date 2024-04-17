import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './invoice.css'

const NextArrow = (props) => {
  const {onClick} = props;
  return (
    <div className="z-50">
      {onClick && (
        <button onClick={onClick} className='absolute top-[3px] -right-[0px] bg-white border
         border-gray-300  z-40 w-8 h-8 rounded-full slider
          flex items-center justify-center hover:bg-gray-100'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="black" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      )}
    </div>
  );
}

const PrevArrow = (props) => {
  const {onClick} = props
  return(
    <div>
      {onClick && (
        <button onClick={onClick} className='absolute top-[3px] -left-[0px] bg-white border 
        border-gray-300 slider z-40 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="black" className="w-4 h-4 flex items-center justify-center">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      ) }
    </div>
  )
}

function Carousel({categories}) {

  const [id, setId] = useState(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    prevArrow : <PrevArrow/>,
    nextArrow : <NextArrow/>
  };

  return (
    <div className="w-full mx-auto mt-6 mb-6" >
      <Slider {...settings}>
        <div className={`p-2 text-sm max-w-fit ${!id ? 'bg-blue-500 text-white' : 'bg-white text-black'} text-center rounded`} onClick={()=>setId(null)}>All</div>
        {categories && categories.map((category)=>(
          <div key={category.id}>
            <div className={`-ml-[148px] p-2 text-sm w-full text-center font-semibold rounded cursor-pointer 
              ${category.id === id ? 'bg-blue-500 text-white' :'bg-white'}`} 
              onClick={()=>setId(category.id)}>
              {category.productCategoryName}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
