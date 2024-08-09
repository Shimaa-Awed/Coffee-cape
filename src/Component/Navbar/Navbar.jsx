import React, { Fragment } from 'react';
import Logo from "../../assets copy/website/coffee_logo.png"
import { FaCoffee } from 'react-icons/fa';
const Menus=[

    {
        id:1,
        name:"Home",
        link:"/#"
    },

    {
        id:2,
        name:"Services",
        link:"/#services",
    },
    {
        id:3,
        name:"About",
        link:"/#about",
    },
    {
        id:4,
        name:"Contact",
        link:"/#contact",
    },

]
const Navbar = () => {
  return (
   <Fragment>
    <div className='bg-gradient-to-r from-secondary
    to-secondary/90 text-white'>
    <div className='container py-2'>
     <div className='flex justify-between items-center gap-4'>
      <div
      data-aos="fade_down"
      data-aos-once="true"
      data-aos-delay="300">
       <a href='#' className='font-bold text-2x1 sm:text-3xl
        flex justify-center items-center gap-2 tracking-wider font-cursive'>
        
        <img src={Logo} alt='logo' className='w-14'/>
         Coffee Cape
       </a>
        </div>

       <div
        data-aos="fade_down"
        data-aos-once="true"
        data-aos-delay="300"
       className='flex justify-between items-center gap-4'>
        <ul className='hidden sm:flex items-center gap-4'>
        {Menus.map((data ,index)=>(

            <li key={data}>
          <a href={data.link}
          className='inline-block text-xl py-4 px-4
           text-white/70
           hover:text-white 
           duration-200 '>
          {data.name}
          </a>
         </li>

  ))}
      
        </ul>
        <button className='bg-primary/70 px-4 py-2 rounded-full hover:scale-105
         duration-200 flex items-center gap-3'>Order
        <FaCoffee className= 'text-xl cursor-pointer'/>
        </button>
       </div>
     </div>
    </div>
    </div>
   </Fragment>
  )
}

export default Navbar;