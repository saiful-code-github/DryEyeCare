import { CCol, CContainer, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import homeaboutImg2 from '../assets/about-1.jpg';
import homeaboutImg1 from '../assets/about-2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from './Button';
const HomeAbout = () => {
    const [ulist, setUList] = useState([]);

    useEffect(() =>{
       const aboutinfo = [
          {
            text: ' Nsectetur cing elit.',
            fontawesome: faAngleRight,
            link: '/details'
          },
          {
            text: '  Suspe ndisse suscipit sagittis leo.',
            fontawesome: faAngleRight,
            link: '/details2'
          },
          {
            text: ' Entum estibulum dignissim posuere.',
            fontawesome: faAngleRight,
            link: '/details3'
          }
       ]
       setUList(aboutinfo);
    },[])
  return (
   <section>
        <CContainer>
            <CRow>
                <CCol lg={6}>
                     <div className='relative'>
                         <img src={homeaboutImg1} alt="" className='relative w-[90%]'/>  
                         <img src={homeaboutImg2} alt=""  className='absolute bottom-[-20px] right-[10px] w-[50%] border-[7px] border-white shadow-lg'/> 
                     </div>
                </CCol>
                {/* second col */}
                <CCol lg={6}> 
                    <div>
                         <h4 className='text-[18px] font-medium text-[var(--bg-color)] md:mt-[0] mt-5 md:mb-[3] mb-3'>About Us
                         </h4>
                         <h2 className='md:text-[40px] text-[28px] mb-4 font-[600] text-[var( --black-color)] font-[var( --poppins-font)]'><span className='text-[var(--bg-color)]'>Introducing</span> The Quality Optometrist Clinic
                         </h2>
                         <p className='text-[var(--para-color)] text-[16px] font-normal leading-6 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <br/><br/>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         </p>
                         <ul className='mt-3'>
                            {ulist.map((list, index) => (
                             <li key={index} className='pb-[8px]'>
                                <Link className='text-black' to={list.link} style={{verticalAlign: "middle"}}><FontAwesomeIcon icon={list.fontawesome} className='text-[14px] w-[15px] h-[15px] bg-[var(--bg-color)] rounded-full p-[5px] text-white' style={{verticalAlign: "middle"}}/> {list.text}</Link>
                                </li>
                            ))}
                         </ul>
                         <Button text="Book An Appointment" className="text-white mt-3"/>
                    </div>
                </CCol>
            </CRow>
        </CContainer>
   </section>
  )
}

export default HomeAbout;