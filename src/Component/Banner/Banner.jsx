import React from 'react';
import BannerImg from '../../assets copy/coffee-white.png';
import bgTextUrl from "../../assets copy/website/coffee-texture.jpg";
import { GrSecure} from "react-icons/gr";
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const bgImg = {
 backgroundImage :`url(${bgTextUrl})`,
 backgroundColor:"#270c03",
 backgroundPosition:"center",
 backgroundRepeat:"no-repeat",
 backgroundSize:"cover",
 height:"100%",
 width:"100%",
};
const Banner = () => {
  return (
   <>
   <span id="about"></span>
   <div style={bgImg}>
   <div className='container min-h-[550px] flex
   justify-center items-center py-12 sm:py-0'>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 '>
      <div data-aos="zoom-in">
       <img src={BannerImg} alt="" className='
       max-w-[430px] w-full mx-auto spin
       drop-shadow-x1'/>
      </div>
      <div className='flex flex-col justify-center 
      gap-6 sm:pt-0'>
        <h2 data-aos="fade-up"
         className='text-3xl sm:text-4x1 font-bold font-cursive' >
        Premium Blen Coffee
        </h2>
        <p data-aos="fade-up"
         className='text-sm text-gray-500
        trracking-wide leading-5'>
         Lorem ipsum dolor sit amet 
        consectetur, adipisicing elit.
         Quia alias deleniti corporis, 
         culpa atque excepturi voluptas voluptate iste sapiente qui.
        </p>
        <div className='grid grid-cols-2 gap-6'> 
        <div className='space-y-5 '>
          <div data-aos="fade-up" className=' flex items-center gap-3'>
         <GrSecure
          className ="text-2x1 h-12 
          w-12 shadow-sm p-3 rounded-full
         bg-red-100"/> 
         <span>Premium Coffee</span>
        
          </div>

          <div
          data-aos="fade-up"
          data-aos-delay="300"
          className=' flex items-center gap-3'>
          <IoFastFood
           className ="text-2x1 h-12 
           w-12 shadow-sm p-3 rounded-full
          bg-orange-100"/> 
          <span>Hot Coffee</span>
         
           </div>
           <div  data-aos="fade-up"
          data-aos-delay="500"
           className=' flex items-center gap-3'>
           <GiFoodTruck
            className ="text-2x1 h-12 
            w-12 shadow-sm p-3 rounded-full
           bg-yellow-100"/> 
           <span>Cold Coffee</span>
          
            </div>
         </div>
        <div data-aos="slider-left" className=' border-l-4 border-primary/50
         pl-6  spac-y-3 '>
         <h2 className='text-2xl font-semibold font-cursive'>
         tea Lover
         </h2>
         <p className='text-gray-500 text-sm'>
         {''}
         Much like writing code,
        brewing the perfect cup of
        tea requires patience, precision, and a dash of passion to create
         a comforting blend of flavors
         </p>
         </div>
        </div>
      </div>
     </div>
    </div>
   </div>
   </>
  )
}

export default Banner;