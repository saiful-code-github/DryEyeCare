import { CCol, CContainer, CRow } from '@coreui/react';
import { faClock,faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Button from './Button';
import post1 from '../assets/blog1.jpg';
import post2 from '../assets/blog2.jpg';
import post3 from '../assets/blog3.jpg';
import { useEffect, useState } from 'react';
import postbgimg from '../assets/blog-bg.png';
const HomePost = () => {
    const [post, setPost] = useState([]);

    useEffect(()=>{
        const postInfo = [
            {
                image: post1,
                title: 'Lorem ipsum dolor sit amet, scing elit, sed do eiusmod.',
                para:'Duis aute irure dolor in reprehen derit in voluptate velit',
                link: '/post',
                linkText: 'Read more',
                fontawesome: faClock,
                fontawesome2:faUser,
                date: '4th Feb 23',
                author: 'admin'
            },
            {
                image: post2,
                title: 'Lorem ipsum dolor sit amet, scing elit, sed do eiusmod.',
                para:'Duis aute irure dolor in reprehen derit in voluptate velit',
                link: '/post',
                linkText: 'Read more',
                fontawesome: faClock,
                fontawesome2:faUser,
                date: '4th Feb 23',
                author: 'admin'
            },
            {
                image: post3,
                title: 'Lorem ipsum dolor sit amet, scing elit, sed do eiusmod.',
                para:'Duis aute irure dolor in reprehen derit in voluptate velit',
                link: '/post',
                linkText: 'Read more',
                fontawesome: faClock,
                fontawesome2:faUser,
                date: '4th Feb 23',
                author: 'admin'
            }
        ] 
        setPost(postInfo)
    },[])
  return (
     <section className='py-8 pb-[30px] relative'>
        <div  className="absolute inset-0"
       style={{
      backgroundImage: `url(${postbgimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: -1,
      filter: "grayscale(1)",
      opacity: 0.8
    }}></div>
          <CContainer className='relative z-10'>
               <div className='text-center'>
                   <h2 className='md:text-[48px] text-[38px] font-medium capitalize text-[var(--black-color)] mb-6'><span className='text-[var(--bg-color)]'>Most</span> Popular Post
                   </h2>
               </div>
               <CRow>
                {
                    post.map((item, index)=>(
                        <CCol lg={4} md={4} sm={6} key={index}>
                        <div className='relative md:mb-[0] mb-[100px]'>
                           <img src={item.image} alt="" className='relative'/>
                           <div className='absolute top-[40%] right-[17px] left-[17px] m-auto bg-white shadow-md rounded-md py-4 px-3'>
                               <ul className='flex justify-between mb-2'>
                                    <li className='text-[16px] font-normal'>
                                     <FontAwesomeIcon icon={item.fontawesome} className='text-[var(--red-color)] mr-2'/> 
                                     {item.date}</li>
                                     <li className='text-[16px] font-normal'>
                                     <FontAwesomeIcon icon={item.fontawesome2} className='text-[var(--red-color)] mr-2'/> 
                                    {item.author}</li>
                               </ul>
                               <h3 className='text-[20px] font-medium text-[var(--bg-color)] mb-2'>{item.title}</h3>
                               <p className='text-[16px] font-normal text-[var(--para-color)] leading-6'>{item.para}</p>
                               <Link to={item.link} className='text-[16px] font-medium capitalize text-[var(--red-color)] mt-3 inline-block underline  decoration-solid '>{item.linkText}</Link>
                           </div>
                        </div>
                    </CCol>
                    ))
                }
                   <CCol lg={12} className='md:mt-[0] mt-[-100px]'>
                       <Button text="View All Post" className="text-white postbtn" to="/post" style={{display: "block", margin: '100px auto 0 auto '}}/>
                   </CCol>
               </CRow>
          </CContainer>
     </section>
  )
}

export default HomePost