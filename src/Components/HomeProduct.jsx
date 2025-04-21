import { CContainer } from '@coreui/react';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from "react-slick";
import productbg from '../assets/product-bg.png';
import pro1 from '../assets/pro-1.png';
import pro2 from '../assets/pro-2.png';
import pro3 from '../assets/pro-3.png';
import pro4 from '../assets/pro-45.png';
import { Link } from 'react-router-dom';

const HomeProduct = () => {
    const slickInfo = [
        {
            image: pro1,
            name: 'Lorem Ipsum Dolor',
            linkTitle: 'View Details',
            link: '/produt'
        },
        {
            image: pro2,
            name: 'Lorem Ipsum Dolor',
            linkTitle: 'View Details',
            link: '/produt'
        },
        {
            image: pro3,
            name: 'Lorem Ipsum Dolor',
            linkTitle: 'View Details',
            link: '/produt'
        },
        {
            image: pro4,
            name: 'Lorem Ipsum Dolor',
            linkTitle: 'View Details',
            link: '/produt'
        },
        {
            image: pro1,
            name: 'Lorem Ipsum Dolor',
            linkTitle: 'View Details',
            link: '/produt'
        },
        {
            image: pro2,
            name: 'Lorem Ipsum Dolor',
            linkTitle: 'View Details',
            link: '/produt'
        },
        {
            image: pro3,
            name: 'Lorem Ipsum Dolor',
            linkTitle: 'View Details',
            link: '/produt'
        },
        {
            image: pro4,
            name: 'Lorem Ipsum Dolor',
            linkTitle: 'View Details',
            link: '/produt'
        }

    ]
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 mt-10 relative bg-[var(--red-color)]" id="productSection">
      {/* Layer for background image */}
      <div
        className="absolute top-0 right-0 bottom-0 left-0 z-0 bg-cover bg-no-repeat bg-center opacity-[0.1]"
        style={{ backgroundImage: `url(${productbg})` }}
      ></div>
      {/* Content container */}
      <CContainer className="relative z-10">
        <div>
          <h2 className="md:text-[48px] text-[38px] pb-7 font-medium text-white capitalize text-center">
            Dry Eyes <span className="text-[var(--bg-color)]">Products</span>
          </h2>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {slickInfo.map((info, index)=>(
                <div key={index} className='mr-3 bg-white p-4 w-5/6 relative'>
                   <img src={info.image} alt="" className='aspect-[4/3] object-contain w-[95%] h-60'/>
                   <h2 className='text-[24px] text-center'>{info.name}</h2>
                   <button className='absolute bottom-[-20px] left-0 right-0 m-auto w-[50%] bg-[var(--bg-color)] z-50 px-3 py-2 rounded-sm'><Link to={info.link} className='text-white'>{info.linkTitle}</Link></button>
                </div>
            ))}
          </Slider>
        </div>
      </CContainer>
    </section>
  );
};

export default HomeProduct;
