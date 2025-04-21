import { CContainer } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import brand1 from '../assets/b1.png';
import brand2 from '../assets/b2.png';
import brand3 from '../assets/b3.png';
import brand4 from '../assets/b4.png';
import brand5 from '../assets/b5.png';
const HomeBrand = () => {
    const [brand, setBrand] = useState([]);

    useEffect(() =>{
      const brandinfo = [
        {
            image:brand1
        },
        {
            image:brand2
        },
        {
            image:brand3
        },
        {
            image:brand4
        },
        {
            image:brand5
        },
        {
            image:brand1
        },
        {
            image:brand2
        },
        {
            image:brand3
        },
        {
            image:brand4
        },
        {
            image:brand5
        }
      ]
      setBrand(brandinfo)
    },[])
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <section className='pt-[130px] pb-[20px]' id="contactSection">
         <CContainer>
              <div className='slider-containe'>
                  <Slider {...settings}>
                    {brand.map((bimg, ind)=>(
                        <div key={ind}>
                           <img src={bimg.image} alt="" style={{aspectRatio: " 5 / 4", objectFit: "contain",mixBlendMode:'multiple' ,width: "100%", height:'auto'}}/>                     
                        </div>
                    ))}
                  </Slider>
              </div>
         </CContainer>
    </section>
  )
}

export default HomeBrand