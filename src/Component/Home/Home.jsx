import React from 'react';
import HeroImg from '../../assets copy/coffee2.png';
import { BsTypeH3 } from 'react-icons/bs';


const Home = () => {
  return (
    <div className='min-h-[550px] sm:min-h-[600px]
    bg-brandDark flex justify-center items-center text-white'>
    <div className='container pb-8 sm:pb-0'>
     <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className='order-2 sm:order-1 '>
       <h2 data-aos="fade-up" 
       data-aos-once="true"
        className='font-bold text-5xl sm:text-6x1 lg:text-7xl'>
        We serve the richest <span data-aos="zoom-out" 
       data-aos-once="true"
         className='text-primary
        font-cursive'>coffee</span> in the city
       </h2>
       <div data-aos="fade-up" 
       data-aos-delay="400">
       <button className='bg-gradient-to-r
        from-primary to-secondary border-2 mt-3
        border-primary rounded-full px-4 py-2
        text-white hover:scale-105 duration-200'> Coffe And Cope</button>
      </div>

      </div>
   
     <div data-aos="zoom-in" 
      
     className='min-h-[450px] flex
     justify-center items-center order-1 sm:order-2
     relative'>
     <img src={HeroImg} alt=''
      className='w-[300px] sm:w-[450px]
      sm:scale-110 mx-auto spin'
      />
      <div dat-aos="fade-left"
       className='bg-gradient-to-r
      from-primary to-secondary absolute top-14 left-10 p-3 rounded-xl hover:scale-105 duration-200'>
     <h3> Hey Coder</h3>
    </div>

      <div  dat-aos="fade-right"
       className='bg-gradient-to-r
      from-primary to-secondary absolute bottom-9 right-10 p-3 rounded-xl hover:scale-105 duration-200'>
     <h3> Best Coffee</h3>
    </div>
     </div>
     </div>
    </div>
    </div>
  

  )
}

export default Home;
