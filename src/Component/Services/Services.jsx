import React from 'react'
import Img2 from '../../assets copy/coffee2.png'
const ServicesData=[
    {
        id:1,
        img:Img2,
        name:"Espresso",
        description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, praesentium! sit amet consectet",
        aosDelay:"100",
    },
    {
        id:2,
        img:Img2,
        name:"Americano",
        description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, praesentium! sit amet consectet",
        aosDelay:"100",
    },

    {
        id:3,
        img:Img2,
        name:"Cappuccino",
        description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, praesentium! sit amet consectet",
        aosDelay:"100",
    },
];
const Services = () => {
  return (
    <>
    <span id='services'></span>
    <div className='py-10'>
     <div className='container'>
      <div data-aos="fade-up" className='text-center mb-20'>
       <h2 className=' text-4xl font-bold font-cursive
       text-gray-800'> Best Coffee For you</h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2
      md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
       {ServicesData.map((data,index)=>{
        return(
            <div 
            data-aos ='fade-up'
            data-aos-delary={data.aosDelay}
             key={index}
            className=' bg-white
            hover:bg-primary hover:text-white rounded-xl
            shadow-xl duration-200 max-w-[400px] group relative'>
            <div className='h-[122px]'>
             <img src={data.img} alt=''
             className='max-w-[200px] block mx-auto 
             transform -translate-y-14
             group-hover:scale-110
             group-hover:rotate-6 duration-300 '
             />
            </div>
            <div className='p-4 text-center'>
             <h2 className='text-xl font-bold'>{data.name} </h2>
             <p className='text-gray-500
              group-hover:text-white duration-300
              text-sm line-clamp-2'>{data.description}</p>
             </div>
            </div>
        );

       })}
      </div>
     </div>
    </div>
     </>
  )
}

export default Services;