import React from 'react';
import { CCol, CContainer, CRow } from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock,faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faXTwitter,faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Top_header = () => {
  return (
    <header className='top-header bg-[#151515] p-[6px]'>
        <CContainer>
              <CRow>
                 <CCol lg={4} md={6} sm={12}>
                     <div className="lg:text-left sm:text-center text-center" >
                        <p className='text-[14px] text-white font-medium'>
                          <FontAwesomeIcon icon={faClock} className='mr-2'/>
                          Open Hours Mon - Sat 9.00am - 18.00pm
                        </p>
                     </div>
                 </CCol>
                 <CCol lg={8} md={6} sm={12}>
                  <CRow>
                  <CCol lg={10}>
                  <ul className='md:d-flex md:justify-end d-flex justify-center mr-[-25px]'>
                        <li className='text-[14px] text-white font-medium mr-2'>
                          <Link to="mailto:info@dryeyecenter.com" className='text-white'>
                          <FontAwesomeIcon icon={faEnvelope} className='mr-2'/>
                          info@dryeyecenter.com
                        </Link></li>
                        <li className='text-[14px] text-white font-medium'>
                           <Link to="tel: + 18000-200-1234" className='text-white'>
                              <FontAwesomeIcon icon={faPhone} className='mr-2'/>
                              + 18000-200-1234
                           </Link> 
                        </li>
                     </ul>
                  </CCol>
                    <CCol lg={2}>
                    <ul className="md:d-flex md:justify-end d-flex justify-center social">
                         <li>
                          <Link to="/">
                              <FontAwesomeIcon icon={faFacebook}/>
                          </Link>
                         </li>
                         <li>
                          <Link to='/'>
                              <FontAwesomeIcon icon={faXTwitter}/> 
                          </Link>
                         </li>
                         <li>
                          <Link to="/">
                            <FontAwesomeIcon icon={faInstagram}/>
                          </Link>
                         </li>
                         <li>
                          <Link to="/">
                           <FontAwesomeIcon icon={faLinkedin}/>
                          </Link>
                         </li>
                     </ul>
                    </CCol>
                  </CRow>
                  </CCol>  
              </CRow> 
        </CContainer>
    </header>
  )
}

export default Top_header;