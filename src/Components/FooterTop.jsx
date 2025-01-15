import { CCol, CContainer, CRow } from '@coreui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import footerlogo from '../assets/footer-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter, faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';
const FooterTop = () => {
    const [email, setEmail] = useState("");
    const handlerChange = (e) =>{
        setEmail(e.target.value);
    }
    const handerSubmit = (e) =>{
         e.preventDefault();
         console.log(email)
         setEmail("")
    }
  return (
    <footer className='bg-[var(--black-color)] py-[40px] relative'>
        <CContainer>
             <CRow>
                 <CCol lang={12}>
                     <div className='flex flex-col justify-center align-center bg-[var(--red-color)] md:p-5 p-4 rounded-md text-center ralative mt-[-116px]'>
                         <h4 className='text-[18px] font-normal text-white pb-2'>Need a Doctor for Check-up? Call for an Emergency Service!</h4>
                         <p className='md:text-[42px] text-[28px] font-medium text-white mt-4'>
                            <Link to="/" className='text-white'>+8 (123) 456 789 12</Link>
                         </p>
                     </div>
                 </CCol>
             </CRow>
               {/* main footer */}
          <CRow className='mt-[60px]' style={{marginTop: "40px"}}>
                 <CCol lg={4} md={4} sm={6}>
                    <div> 
                       <img src={footerlogo} alt="" className='w-[55%]'/>
                       <p className='text-[18px] font-normal text-white mt-4 leading-7 md:text-start md:mb-[0] mb-[20px] w-[95%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempar asin cididunt ut labore et dolore magna ali qua. Lorem ipsum dolor sit amet.</p>
                    </div>
                 </CCol>
                 <CCol lg={2} md={4} sm={6} className='md:w-[100%] w-[50%] footcol'>
                    <h2 className='text-[20px] font-medium text-[var(--bg-color)] mb-3'>Menu Links</h2>
                    <ul className='fmenu'>
                        <li>
                            <Link>Home</Link>
                        </li>
                        <li>
                            <Link>About Us</Link>
                        </li>
                        <li>
                            <Link>Patients</Link>
                        </li>
                        <li>
                            <Link>Dry Eyes Products</Link>
                        </li>
                        <li>
                            <Link>Accreditation</Link>
                        </li>
                        <li>
                            <Link>Testimonials</Link>
                        </li>
                        <li>
                            <Link>Contacts us</Link>
                        </li>
                    </ul>
                 </CCol>
                 <CCol lg={2} md={4} sm={6} className='footcol'>
                    <h2 className='text-[20px] font-medium text-[var(--bg-color)] mb-3'>Usefull Links</h2>
                    <ul className='fmenu'>
                        <li>
                            <Link>Home</Link>
                        </li>
                        <li>
                            <Link>About Us</Link>
                        </li>
                        <li>
                            <Link>Patients</Link>
                        </li>
                        <li>
                            <Link>Dry Eyes Products</Link>
                        </li>
                        <li>
                            <Link>Accreditation</Link>
                        </li>
                        <li>
                            <Link>Testimonials</Link>
                        </li>
                        <li>
                            <Link>Contacts us</Link>
                        </li>
                    </ul>
                 </CCol>
                 <CCol lg={4} md={4} sm={6} className='flex flex-col justify-start'>
                 <h2 className='text-[20px] font-medium text-[var(--bg-color)] mb-3'>Contact Us</h2>
                  <p className='text-[16px] font-normal text-white pb-3'>
                    <Link className='text-white'>OPTICO EYE HOSPITAL Lorance 542B, Tailstoi Town 5248 MT, Wordwide Country</Link>
                  </p>
                  <p className='text-[16px] font-normal text-white pb-3'>
                    <Link className='text-white'>+ 18000-200-1234</Link>
                  </p>
                  <p className='text-[16px] font-normal text-white pb-3'>
                     <Link className='text-white'> info@dryeyecenter.com</Link>
                  </p>
                  <p className='text-[16px] font-normal text-white pb-1'>
                    <Link className='text-white'>info@dryeyecenter.com</Link>
                  </p>
                 </CCol>
             </CRow>
             {/* last */}
             <CRow style={{marginTop: "40px"}}>
                <CCol lg={6}>
                     <h3 className='md:text-[20px] text-[18px] font-medium text-[var(--bg-color)] mb-[20px]'>Subscribe Our Newsletters & Stay Update</h3>
                      <form onSubmit={handerSubmit}>
                        <input type="text" placeholder='Enter your Email Id' className='md:pt-[10px] md:pb-[10px] md:pl-[10px] md:pr-[170px] pt-[10px] pb-[10px] pl-[10px] pr-[50px]' value={email} style={{borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px"}} onChange={handlerChange} />
                        <button type='submit' style={{background: "var(--bg-color)", color: "#fff", padding:"10px 15px", borderTopRightRadius: "5px",borderBottomRightRadius: "5px"}}>Subscribe</button>
                    </form> 
                </CCol>
                <CCol lg={6}>
                    <h2 className='md:text-[20px] text-[18px] md:mt-0 mt-[25px] font-medium text-[var(--bg-color)] mb-[20px]'>Follow Us</h2>
                    <ul className='flex lsmenu'>
                        <li>
                            <Link>
                             <FontAwesomeIcon icon={faFacebook}/>
                            </Link>
                        </li>
                        <li>
                            <Link>
                             <FontAwesomeIcon icon={faTwitter}/>
                            </Link>
                        </li>
                        <li>
                            <Link>
                             <FontAwesomeIcon icon={faInstagram}/>
                            </Link>
                        </li>
                        <li>
                            <Link>
                              <FontAwesomeIcon icon={faLinkedin}/>
                            </Link>
                        </li>
                    </ul>
                </CCol>
             </CRow>
            
        </CContainer>
    </footer>
  )
}

export default FooterTop