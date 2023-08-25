import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
const ProductDetailsView = () => {
    const productDetails=useLoaderData()
    const { brand, price, quantity, productName, category, details, productImg, ratings } = productDetails
    return (
        <>
            <div className='container mx-auto mt-16 max-w-7xl'>


                <div className="card lg:card-side bg-base-100 shadow-xl lg:h-[400px]">
                    <img src={productImg} className=' lg:h-[400px] lg:w-[400px]' alt="Album" />
                    <div className="card-body">
                        <h2 className="card-title font-bold">Name:{productName}</h2>
                        <p className='text-xl text-emerald-950'>ToyName:{brand}</p>
                        <p className='text-lg text-purple-900 font-semibold'>category:{category}</p>
                        <p className='font-bold text-sky-900'>Price:{price}</p>
                        <p className='font-bold text-indigo-900'>Quantity:{quantity}</p>

                        <div className='flex  items-center'>
                            <Rating style={{ maxWidth: 150 }} value={Math.round(ratings) || 0} readOnly /><span className='ms-2'> ({ratings})</span>
                        </div>
                        <p className='font-normal text-lg text-green-800'>Description: {details}</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ProductDetailsView;