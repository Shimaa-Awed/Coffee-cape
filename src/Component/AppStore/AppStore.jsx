import React from 'react';
import storeImg from "../../assets copy/website/app_store.png";
import PlayStoreImg from "../../assets copy/website/play_store.png";
import bgStore from "../../assets copy/website/coffee-beans-bg.png";

const bgAppStore ={
backgroundImage :`url(${bgStore})`,
 backgroundColor:"#270c03",
 backgroundPosition:"center",
 backgroundRepeat:"no-repeat",
 backgroundSize:"cover",
 height:"100%",
 width:"100%",
};

const AppStore = () => {
  return (
  <>
  <div style={bgAppStore} className='py-14'>
   <div className='container'>
    <div className='grid grid-cols-1 sm:grid-cols-2
    items-center gap-4'>
    <div data-aos="fade-up" className='space-y-6 max-w-xl mx-auto'>
     <h2 className='text-2xl text-center
     sm:text-left sm:text-4xl font-semibold pl-3
     text-white/90'> 
     Coffee Cafe is available for Android and IOS
     </h2>
     <div className='flex flex-wrap 
     justify-center sm:justify-start 
      items-center'>
     <a href='#'>
       <img src={storeImg} alt=''
       className='max-w-[150px] sm:max-w-[120px]
       md:max-w-[200px]'
       />
       </a>

       <a href='#'>
      <img 
      src={PlayStoreImg}
       alt=''
      className='max-w-[150px] sm:max-w-[120px]
      md:max-w-[200px]'
       />
      </a>
     </div>
     </div>
    </div>
   </div>
  </div>
    
  </>
  )
}

export default AppStore;