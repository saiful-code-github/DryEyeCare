import React, { useEffect, useState } from 'react';
import { CCarousel, CCarouselCaption, CCarouselItem, CCol, CImage, CRow } from '@coreui/react';
import bannerimg from '../assets/banner.jpg';
import Button from './Button';

const HomeSec1 = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() =>{
    const bannerC = [
      {
         image: bannerimg,
         header: 'Give Your eyes the deserved',
         headersub: 'care',
         para: "Some representative placeholder content for the first slide."
      },
      {
       image: bannerimg,
       header: 'Give Your eyes the deserved',
       headersub: 'care',
       para: "Some representative placeholder content for the first slide."
    },
    {
     image: bannerimg,
     header: 'Give Your eyes the deserved',
     headersub: 'care',
     para: "Some representative placeholder content for the first slide."
  }
 ]
 setBanner(bannerC);
  },[])
  return (
    <section className='banner relative'>
        <CCarousel controls dark>
        {banner.map((item, index)=>(
      <CCarouselItem key={index}>
        <CRow className='g-0'>
            <div className='w-[255px] h-[255px] animate-bounce shadow-lg rounded-full inline-block bg-gradient-to-r to-[rgb(49,49,49)] from-[#44f7fd] absolute top-[9.5rem] left-[7.75rem]' style={{width: "150px",height: "150px",animation: "bounce 6s linear infinite"}}></div>
           <CCol lg={6} style={{background: "var(--bg-color)"}}>
           <CCarouselCaption className="d-md-block text-start">
        <h2 className='md:text-[41px] text-[32px] font-semibold capitalize text-[var( --black-color)] md:w-[47%] w-[100%] mb-3'>{item.header} <span className='text-white'>{item.headersub}</span></h2>
        <p>{item.para}</p>
        <div className='mt-4'>
          <Button text="Contact Us" to="/contact" className="text-4xl font-extrabold"/>
           <Button text="+ 031 524" to="tel:+031 524" style={{background:"var( --button-gradient-color)",marginLeft: "10px"}} className="text-start"/>
        </div>
      </CCarouselCaption>
           </CCol>
           <CCol lg={6}>
           <CImage className="d-block w-100 md:h-[500px] h-[300px] object-cover" src={item.image} alt="slide 1"/>
           </CCol>
        </CRow>
    </CCarouselItem>
        ))}
    </CCarousel>
    </section>
  )
}

export default HomeSec1;