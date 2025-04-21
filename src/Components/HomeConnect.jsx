import { CCol, CContainer, CRow } from '@coreui/react'
import React, { useEffect, useState } from 'react';
import connect1 from '../assets/health1.png';
import connect2 from '../assets/health2.png';
import connect3 from '../assets/health3.png';
import line1 from '../assets/healthline1.png';
import line2 from  '../assets/healthline2.png';
import line3 from '../assets/healthline3.png';
import line4 from '../assets/healthline4.png';
const HomeConnect = () => {
    const [connect, setConnect] = useState([]);

    useEffect(()=>{
       const connectInfo = [
          {
            image:connect1,
            title: 'Connect With Us',
            para: 'Whenever you are feeling not okay about your eye, connect with us.'
          },
          {
            image:connect2,
            title: 'Connect With Us',
            para: 'Whenever you are feeling not okay about your eye, connect with us.'
          },
          {
            image:connect3,
            title: 'Connect With Us',
            para: 'Whenever you are feeling not okay about your eye, connect with us.'
          }
       ]
       setConnect(connectInfo);
    },[])
  return (
    <section className='relative' id="accreditationSection">
        <CContainer>
              <h2 className='md:text-[48px] text-[38px] text-[var(--black-color)] font-medium capitalize mb-5 text-center pt-9'><span className='text-[var(--bg-color)]'>How It Helps</span> You To Keep Healthy</h2>
              <CRow className='pb-[50px]'>
                <div className="headerlinebox">
                <img src={line1} alt="" className='w-[14%] headlineOne' />
                <img src={line2} alt="" className='w-[19%] headlineTwo'/>
                <img src={line3} alt="" className='w-[19%] headlineThree'/>
                <img src={line4} alt="" className='w-[19%] headlinefour'/>
                </div>
                {connect.map((con, ind)=>(
                    <CCol lg={4} md={4} sm={12} key={ind}>
                    <div className='text-center'>
                        <img src={con.image} alt="" className='block m-auto w-[60%] h-auto' style={{aspectRatio: "2 / 2", objectFit: "container"}}/>
                        <h3 className='mt-4 text-[24px] font-medium capitalize text-[va(--black-color)] mb-[10px]'>{con.title}
                        </h3>
                        <p className='text-[16px] font-normal text-[var(--para-color)] leading-7'>
                          {con.para}
                        </p>
                    </div>
                    
                    </CCol>
                ))}
              </CRow>
        </CContainer>
    </section>
  )
}

export default HomeConnect;                          