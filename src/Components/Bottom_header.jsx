import React, { useEffect, useState } from 'react';
import {
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import { NavLink,Link, useLocation,useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import wihiteLogo from '../assets/footer-logo.png';

const Bottom_header = () => {
  const [visible, setVisible] = useState(false);
  const [scrollnav, scrollsetNav] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate()
  // sectionScroll
  const sectionToScroll = (e, sectionId) => {
    e.preventDefault();
    setVisible(false)
    if(window.location.pathname !== '/'){
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if(section){
          section.scrollIntoView({behavior: "smooth", block: "start"})
        }
      }, 1000);
    }else{
      const section = document.getElementById(sectionId);
      if(section){
        section.scrollIntoView({behavior: "smooth", block: "start"})
      }
    }
  }
  const getLinkStyle = (path) => {
       return {
          color: location.pathname === path ? "var(--bg-color)" : 'inherit',
          fontWeight: location.pathname === path ? "bold" : 'inherit'
       }
  }
  useEffect(()=>{
    const scrollNavbar = () =>{
      scrollsetNav(window.scrollY > 100);
    };
    window.addEventListener('scroll',scrollNavbar);
    return () => {
     window.removeEventListener('scroll',scrollNavbar)
    }
 },[])
  return (
   <header id='homeSection'>
        <CNavbar expand="lg" className={`bg-[#f1f0f0] ${scrollnav ? 'sticky' : 'inherit'}`}>
      <CContainer>
        <CNavbarBrand>
           <NavLink to="homeSection" onClick={(e)=> sectionToScroll(e, "homeSection")}>
                 <img src={`${scrollnav ? wihiteLogo : logo }`} alt="" className='w-[185px] h-auto'/>
           </NavLink>
        </CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="ms-auto">
            <CNavItem>
              <CNavLink as={Link} to="homeSection" onClick={(e)=> sectionToScroll(e, "homeSection")} style={getLinkStyle('/')}>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink as={Link} to="aboutSection" onClick={(e)=> sectionToScroll(e, "aboutSection")} style={getLinkStyle('/about')} >About Us</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink as={Link} to="patientSection" onClick={(e)=> sectionToScroll(e, "patientSection")} style={(getLinkStyle('/patients'))}>Patients</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink  as={Link} to="productSection" onClick={(e)=> sectionToScroll(e, 'productSection')} style={(getLinkStyle('/productSection'))}>Dry Eyes Products</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink  as={Link} to="accreditationSection" onClick={(e)=> sectionToScroll(e, "accreditationSection")} style={(getLinkStyle('/accreditationSection'))}>Accreditation</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink  as={Link} to="clientSection" onClick={(e)=> sectionToScroll(e, "clientSection")} style={(getLinkStyle('clientSection'))}>Testimonials</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink  as={Link} to="contactSection" onClick={(e)=> sectionToScroll(e, "contactSection")} style={(getLinkStyle('contactSection'))}>Contacts us</CNavLink>
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
   </header>
  )
}

export default Bottom_header;