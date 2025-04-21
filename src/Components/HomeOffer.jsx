import { CCol, CContainer, CRow } from '@coreui/react';
import React from 'react'
import Button from './Button';
import offerimg from '../assets/offer.png';
const HomeOffer = () => {
  return (
   <section className='mt-10 relative' id="patientSection">
    <div className='animate-bounce absolute top-[19%] left-[73%] md:inline-block hidden w-[350px] h-[350px] rounded-full bg-[#f5f5f5] border-solid border-white border-[60px] shadow-lg z-0' style={{animation: "bounce 8s linear infinite"}}></div>
       <CContainer>
             <CRow>
                <CCol lg="6">
                    <div>
                        <h4 className='text-[18px]
                        font-medium capitalize text-[var(--red-color)] mb-3'>What We Offer
                        </h4>
                        <h2 className='md:text-[48px] text-[38px] mb-4 font-medium capitalize text-[var(--black-color)] font-[(--poppins-font)]'><span className='text-[var(--bg-color)] block'>Professional
                        </span> Laboratory Tests
                        </h2>
                        <p className='text-[18px] font-normal text-[var(--para-color)] text-justify mb-[20px] leading-7'> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <br/> <br/>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse c illum dolore efugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        </p>
                        <Button text="Book An Appoinment" className="text-white"/>
                    </div>
                </CCol>
                {/* second col */}
                <CCol lg={6} className='relative z-10'>
                   <div className='mt-6'>
                       <img src={offerimg} alt="" className='md:pr-[80px] pr-[0]'/>
                   </div>
                </CCol>
             </CRow>
       </CContainer>
   </section>
  )
}

export default HomeOffer;