import React from 'react'
import Slider from 'react-slick';

const TestimonialData=[

{
    id:1,
    name:"Shimaa Awed",
    text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia alias deleniti corporis, culpa atque excepturi voluptas voluptate iste sapiente qui.",
    img:"https://picsum.photos/101/101",
},
{
    id:2,
    name:"Sabir ali",
    text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia alias deleniti corporis, culpa atque excepturi voluptas voluptate iste sapiente qui.",
    img:"https://picsum.photos/102/102",
},
{
    id:3,
    name:"Omran Ahmed",
    text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia alias deleniti corporis, culpa atque excepturi voluptas voluptate iste sapiente qui.",
    img:"https://picsum.photos/104/104",
},
{
    id:4,
    name:"Lailla",
    text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia alias deleniti corporis, culpa atque excepturi voluptas voluptate iste sapiente qui.",
    img:"https://picsum.photos/106/106",
},
]



const Testimonial = () => {
    const settings ={
        dots:true,
        arrows:false,
        infinity:true,
        speed:500,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseOnFocus:true,
     responsive: [
        {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true
            },
        },

  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
    }
  },
  {
    breakpoint: 970,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 3,
      initialSlide: 4,
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 2,
    },
  },
]
    };
  return (
   <>
   <div className='py-14 mb-10'>
    <div className='container'>
    <div data-aos="fade-up" className='text-center mb-10'>
    <h2 className=' text-4xl font-bold font-cursive
    text-gray-800'> Testimonial</h2>
    </div>
    <div  data-aos="zoom-in">
    <Slider {...settings}>
     {
        TestimonialData.map((data,index)=>{
            return(
                <div className='my-6' key={data.id}>
                <div className='flex flex-col gap-4
                shadow-lg py-8 px-6 mx-4 rounded-xl
                bg-primary/10 relative'>
                 <div className='mb-4'>
                <img src={data.img} alt=''
                className='rounded-full w-20 h-20 '/>
                </div>
                 <div className='flex flex-col
                 items-center gap-4'>
                  <div className='space-y-3'>
                   <p className='text-xs
                   text-gray-500'>
                   {data.text}
                   </p>
                   <h2 className='text-xl font-bold
                   text-black/60 font-cursive'>
                   {data.name}
                   </h2>
                  </div>
                 </div>
                 <p className='text-black/20 text-9xl
                 font-serif absolute right-0 top-0' >,,</p>
                </div>
                </div>
            )
        })
     }
    </Slider>
    </div>
    </div>
   </div>
   </>
  )
}

export default Testimonial;