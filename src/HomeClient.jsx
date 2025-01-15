import { CContainer } from '@coreui/react';
import Slider from "react-slick";
import clientimg from './assets/client1.png';
import clientimg2 from './assets/client2.png';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const HomeClient = () => {
    const clinetinfo = [
        {
          fontawesome: faQuoteRight,
          para: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum voluptas pariatur, temporibus facilis facere, tempore, minima laborum dolorum quibusdam fuga sed corrupti sint repellendus?',
          image: clientimg,
          name: 'Swati Ghosh',
          dec: 'Wiusmod tempor incididunt'
        },
        {
          fontawesome: faQuoteRight,
          para: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum voluptas pariatur, temporibus facilis facere, tempore, minima laborum dolorum quibusdam fuga sed corrupti sint repellendus?',
          image: clientimg2,
          name: 'Swati Ghosh',
          dec: 'Wiusmod tempor incididunt'
        },
        {
          fontawesome: faQuoteRight,
          para: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum voluptas pariatur, temporibus facilis facere, tempore, minima laborum dolorum quibusdam fuga sed corrupti sint repellendus?',
          image: clientimg,
          name: 'Swati Ghosh',
          dec: 'Wiusmod tempor incididunt'
        },
        {
            fontawesome: faQuoteRight,
            para: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum voluptas pariatur, temporibus facilis facere, tempore, minima laborum dolorum quibusdam fuga sed corrupti sint repellendus?',
            image: clientimg,
            name: 'Swati Ghosh',
            dec: 'Wiusmod tempor incididunt'
          },
          {
            fontawesome: faQuoteRight,
            para: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum voluptas pariatur, temporibus facilis facere, tempore, minima laborum dolorum quibusdam fuga sed corrupti sint repellendus?',
            image: clientimg2,
            name: 'Swati Ghosh',
            dec: 'Wiusmod tempor incididunt'
          },
          {
            fontawesome: faQuoteRight,
            para: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum voluptas pariatur, temporibus facilis facere, tempore, minima laborum dolorum quibusdam fuga sed corrupti sint repellendus?',
            image: clientimg,
            name: 'Swati Ghosh',
            dec: 'Wiusmod tempor incididunt'
          }
     ]
    var settings = {
        dots: false,
        arrow:false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
  return (
     <section className='bg-[var(--bg-color)] py-9'>
          <CContainer style={{marginTop: '7px', marginBottom: "-200px"}}>
            <h2 className='md:text-[48px] text-[34px] font-medium text-[var(--black-color)] capitalize mb-4 text-center'>What our <span className='text-[var(--white-color)]'>Patients say</span></h2>
               <div className="slider-container">
                  <Slider {...settings}>
                    {clinetinfo.map((cli, ind)=> (
                            <div key={ind} className='bg-white shadow-md py-3 px-3 rounded-md'> 
                            <FontAwesomeIcon icon={cli.fontawesome} size='3x' className='text-[var(--bg-color)] mb-4'/>
                            <p className='text-[18px] font-normal text-[var(--para-color)] leading-7 text-start mb-3'>
                              {cli.para}
                            </p>
                            <div className='flex'>
                              <div className='flex-grow-0'>
                                  <img src={cli.image} alt="" style={{aspectRatio: '2 / 1', objectFit: "container",width:"80px", height: "80px", borderRadius: "50px",border: "3px solid var(--bg-color)"}}/>
                              </div>
                              <div className='flex-shrink-0 ml-3'>
                                    <h4 className='text-[20px] font-medium text-[var(--bg-color)] mb-2'>{cli.name}</h4>
                                    <h6 className='text-[14px] text-[#1f1f1f] font-normal'>{cli.dec}
                                    </h6>
                              </div>
                            </div>
                         </div>
                        ))
                    }
                  </Slider>
               </div>
          </CContainer>
     </section>
  )
}

export default HomeClient