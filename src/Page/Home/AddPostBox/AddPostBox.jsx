import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const AddPostBox = () => {
    return (
        <>
          



           <h1 className='text-2xl lg:text-2xl text-center font-bold text-slate-900 mt-9  px-3'>Contact Us</h1>
            <p className='text-lg mt-2 text-gray-500  text-center'>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
            <div className='container mx-auto flex justify-center items-center gap-2 px-6'>
                <div>
                    <p className='text-black  font-medium mt-2'>Name</p>
                    <input type="text" placeholder="Name" className="input input-bordered input-accent w-full max-w-xs  mt-2" />
                </div>
                <div>
                    <p className='text-black font-medium  mt-2'>Email</p>
                    <input type="email" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs  mt-2" />
                </div>
            </div>

            <div className='container mx-auto text-center mt-7'>
                <p className='text-black font-medium  mt-2 mb-2'>Message</p>
                <textarea className="textarea textarea-accent w-full md:w-96 h-48" placeholder="Message"></textarea>

            </div>
            <div className='text-center'>
                <button className="btn btn-secondary mt-2">Send</button>
            </div>


            <div className='container mx-auto text-center mt-5'>
                <hr className='w-1/2 mx-auto' />
                <p className='text-fuchsia-700 font-medium  mt-4'>Amazing Ecommerce@gmail.com</p>
                <p className='text-black font-medium  mt-6'>6600 ShoniAkhra. <br />
                    ShoniAkhra, Dhaka-1205 Bangladesh</p>
                <div className='flex justify-center items-center gap-4 mt-4 text-blue-500'>
                    <p>  <FaFacebook></FaFacebook></p>
                    <p>  <FaInstagram></FaInstagram></p>
                    <p>  <FaTwitter></FaTwitter></p>
                </div>

            </div>



           


        </>
    );
};

export default AddPostBox;