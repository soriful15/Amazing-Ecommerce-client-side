import React from 'react';
import customer1 from '../../../assets/customer pic/customer-1.jpg'
import Rating from 'react-rating';
import { FaStar, FaRegStar, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import customer2 from '../../../assets/customer pic/customer-2.jpg'
import customer3 from '../../../assets/customer pic/cutomer-3.jpg'
const CustomerSay = () => {
    return (
        <>
            <h1 className='mx-auto container text-teal-300 md:text-3xl text-lg text-center mt-20'>What Customer Are Saying</h1>

            <div className='grid lg:grid-cols-2 xl:grid-cols-3  md:grid-cols-2 gap-4 mx-auto container mt-10'>



                <div className="card w-96 bg-white border-2 mx-auto border-zinc-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex gap-3'>
                            <img src={customer1} className='w-16 rounded-full' alt="" />

                            <div>
                                <h2 className="card-title">Sarah Thompson</h2>
                                <div className="">

                                    <Rating
                                        placeholderRating={4.5}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>} />

                                </div>
                            </div>
                        </div>
                        <p>I recently purchased the Amazing Ecommerce set for my daughter, and she absolutely loves it! The Amazing Ecommerce shopping are well-made and durable, perfect for rough product. The vibrant colors and realistic designs make them even more appealing. I'm very satisfied with the purchase and would highly recommend these Amazing Ecommerces to others."

                        </p>

                        <p className=' flex justify-center md:text-2xl gap-3 mt-6'><FaFacebook></FaFacebook>    <FaInstagram></FaInstagram>  <FaTwitter></FaTwitter> <FaYoutube></FaYoutube> </p>
                    </div>
                </div>



                <div className="card w-96 bg-white border-2 mx-auto border-zinc-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex gap-3'>
                            <img src={customer2} className='w-16 rounded-full h-10' alt="" />

                            <div>
                                <h2 className="card-title">Md Nasim Hosen</h2>
                                <div className="">

                                    <Rating
                                        placeholderRating={4}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>} />

                                </div>
                            </div>
                        </div>
                        <p>I bought the Amazing Ecommerce set as a gift for my nephew, and he hasn't stopped producting with them since he got them. The variety of animals included in the set is impressive, and they are all nicely detailed. The Amazing Ecommerce shopping are also a good size, easy for small hands to hold and manipulate. I'm pleased with the quality and overall value of this product set

                        </p>

                        <p className=' flex justify-center text-2xl gap-3 mt-6'><FaFacebook></FaFacebook>    <FaInstagram></FaInstagram>  <FaTwitter></FaTwitter> <FaYoutube></FaYoutube> </p>
                    </div>
                </div>




                <div className="card w-96 bg-white border-2 mx-auto border-zinc-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex gap-3'>
                            <img src={customer3} className='w-16 rounded-full h-10' alt="" />

                            <div>
                                <h2 className="card-title">Md Kamrul Hasan</h2>
                                <div className="">

                                    <Rating
                                        placeholderRating={5}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>} />

                                </div>
                            </div>
                        </div>
                        <p>I recently purchased the Amazing Ecommerce set for my son, and he's been having a blast with them. The Amazing Ecommerce shopping are made of safe materials, which was an important factor for me. They are also easy to clean, which is a huge plus. The set comes in a handy storage box, making it convenient to keep all the Amazing Ecommerce shopping organized. 
                        </p>

                        <p className=' flex justify-center text-2xl gap-3 mt-6'><FaFacebook></FaFacebook>    <FaInstagram></FaInstagram>  <FaTwitter></FaTwitter> <FaYoutube></FaYoutube> </p>
                    </div>
                </div>



            </div>



        </>
    );
};

export default CustomerSay;