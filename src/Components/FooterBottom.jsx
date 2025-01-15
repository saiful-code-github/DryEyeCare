import { CContainer, CFooter,CLink } from '@coreui/react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
const FooterBottom = () => {
  const [scrolUp, setScrollUp] = useState(false);

  const scrroTopUP = () =>{
    window.scrollTo({
      top:0,
      behavior:'smooth',
    })
 }
  useEffect(() =>{
       const scrollVisible = () =>{
        setScrollUp(window.scrollY > 150)
       }
       window.addEventListener("scroll", scrollVisible);
       return () => {
          window.removeEventListener('scroll', scrollVisible)
       }
  },[])
  return (
    <footer>
        <CFooter>
          <CContainer className='flex justify-between'>
          <div className='text-center w-full'>
            <CLink href="https://coreui.io">Copyright</CLink>
            <span>&copy;2024 Dry eye Centers. All rights reserved.</span>
          </div> 
          </CContainer>
          <div>
            {scrolUp && (
              <button onClick={scrroTopUP} className='bg-[var(--bg-color)] text-white w-[45px] h-[45px] rounded-md fixed bottom-[45px] right-[45px] text-center z-50'>
                <FontAwesomeIcon icon={faArrowUp} className='animate-bounce' size='lg'/>
              </button>
            )}
          </div>
       </CFooter>
    </footer>
  )
}

export default FooterBottom;