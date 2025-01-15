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
import { NavLink,Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import wihiteLogo from '../assets/footer-logo.png';

const Bottom_header = () => {
  const [visible, setVisible] = useState(false);
  const [scrollnav, scrollsetNav] = useState(false);
  
  const location = useLocation();
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
   <header>
        <CNavbar expand="lg" className={`bg-[#f1f0f0] ${scrollnav ? 'sticky' : 'inherit'}`}>
      <CContainer>
        <CNavbarBrand>
           <NavLink>
                 <img src={`${scrollnav ? wihiteLogo : logo }`} alt="" className='w-[185px] h-auto'/>
           </NavLink>
        </CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="ms-auto">
            <CNavItem>
              <CNavLink as={Link} to="/" style={getLinkStyle('/')}>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink as={Link} to="/about" style={getLinkStyle('/about')} >About Us</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink as={Link} to="/Patients" style={(getLinkStyle('/patients'))}>Patients</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink  as={Link} to="/Patients" style={(getLinkStyle('/patients'))}>Dry Eyes Products</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink  as={Link} to="/Patients" style={(getLinkStyle('/patients'))}>Accreditation</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink  as={Link} to="/Patients" style={(getLinkStyle('/patients'))}>Testimonials</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink  as={Link} to="/Patients" style={(getLinkStyle('/patients'))}>Contacts us</CNavLink>
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
   </header>
  )
}

export default Bottom_header;