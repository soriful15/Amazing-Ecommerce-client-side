
import React from 'react';
import banner1 from '../../../assets/BannerImg/banner1.webp'
import banner2 from '../../../assets/BannerImg/banner2.webp'
import banner3 from '../../../assets/BannerImg/banner3.webp'

const Banner = () => {
  return (
    <>
      <div className="carousel md:w-full lg:max-w-5xl h-[500px] mt-5 lg:container mx-auto lg:ml-12 xl:ml-32 w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full rounded-2xl " />
        <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0   rounded-2xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className='space-y-7 md:w-1/2 md:pl-12 pl-5 '>
            <h2 className='text-xl lg:text-3xl font-bold text-indigo-400'> The Ultimate  Amazing Ecommerce  Collection! </h2>
            <p className='lg:text-2xl font-normal text-white'>Discover a menagerie of delightful  Amazing Ecommerce  ! Our banner showcases a collection of adorable creatures that will bring joy to children of all ages.</p>
            <div className='md:flex md:gap-5'>

              <button className="btn  btn-success ml-2">Latest Shopping</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-outline">❮</a>
          <a href="#slide2" className="btn btn-outline ">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full rounded-2xl" />
        <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0   rounded-2xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className='space-y-7 md:w-1/2 md:pl-12 pl-5 '>
            <h2 className='text-xl lg:text-3xl font-bold text-indigo-400'> The Ultimate  Amazing Ecommerce  Collection! </h2>
            <p className='lg:text-2xl font-normal text-white'>Discover a menagerie of delightful  Amazing Ecommerce  ! Our banner showcases a collection of adorable creatures that will bring joy to children of all ages.</p>
            <div className='md:flex md:gap-5'>

              <button className="btn  btn-success ml-2">Latest Shopping</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-outline">❮</a>
          <a href="#slide3" className="btn btn-outline">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full rounded-2xl" />
        <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0   rounded-2xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className='space-y-7 md:w-1/2 md:pl-12 pl-5 '>
            <h2 className='text-xl lg:text-3xl font-bold text-indigo-400'> The Ultimate  Amazing Ecommerce  Collection! </h2>
            <p className='lg:text-2xl font-normal text-white'>Discover a menagerie of delightful  Amazing Ecommerce  ! Our banner showcases a collection of adorable creatures that will bring joy to children of all ages.</p>
            <div className='md:flex md:gap-5'>

              <button className="btn  btn-success ml-2">Latest Shopping</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-outline">❮</a>
          <a href="#slide1" className="btn btn-outline">❯</a>
        </div>
      </div>
   
    </div>


    
   


  




    </>



  );
};

export default Banner;