import { CCol, CContainer, CRow } from '@coreui/react'
import React, { useEffect, useState } from 'react';
import counter1 from '../assets/count1.png';
import counter2 from '../assets/count2.png';
import counter3 from '../assets/count3.png';
import counter4 from '../assets/count4.png';
import CountUp from 'react-countup';
const HomeSpecialist = () => {
  const [count, setCount] = useState([]);
  useEffect(()=>{
    const countinfo = [
      {
        icon: counter1,
        number: 320,
        title: 'Different Services'
      },
      {
        icon: counter2,
        number: 20,
        title: 'Total Experience'
      },
      {
        icon: counter3,
        number: 650,
        title: 'Satisfied Patients'
      },
      {
        icon: counter4,
        number: 24,
        title: 'Eye Specialists'
      }
    ]
    setCount(countinfo)
  },[])
  return (
    <section className='bg-[var(--bg-color)] py-12 md:mr-[193px] mr-0' style={{ borderTopRightRadius: "5px" ,borderBottomRightRadius: "5px"}}>
        <CContainer>
              <CRow className='md:pl-[100px] pl-[0]'>
                {count.map((item, index) => (
                  <CCol lg={3} md={4} sm={6} key={index}  className='colres'>
                     <div className='flex'>
                        <div className='flex-grow-0 mr-4'>
                            <img src={item.icon} alt="" /> 
                        </div>
                        <div className='flex-shrink-1'>
                             <h2 className='text-[48px] font-semibold text-white'>
                              <CountUp start={0} end={item.number} delay={2}/>
                             </h2>
                           <h4 className='text-[18px] font-medium text-white mt-1'>{item.title}
                           </h4>
                        </div>
                     </div>
                 </CCol>
                ))}
              </CRow>
        </CContainer>
    </section>
  )
}

export default HomeSpecialist;