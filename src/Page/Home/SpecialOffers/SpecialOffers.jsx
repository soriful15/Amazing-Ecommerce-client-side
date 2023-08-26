import React, { useState } from 'react';
import tShirt from '../../../assets/SpecialOffersImg/tShirt1.jpeg'
import tShirt2 from '../../../assets/SpecialOffersImg/tShirt2.jpeg'
import sunglass from '../../../assets/SpecialOffersImg/sunglass1.jpeg'
import sunglass2 from '../../../assets/SpecialOffersImg/sunglass2.jpeg'
import watch from '../../../assets/SpecialOffersImg/watch1.jpeg'
import watch2 from '../../../assets/SpecialOffersImg/watch2.jpeg'
import { toast } from 'react-toastify';
const SpecialOffers = () => {
    const [buy1,setBuy1]=useState(false)
    const [buy2,setBuy2]=useState(false)
    const [buy3,setBuy3]=useState(false)
    const [buy4,setBuy4]=useState(false)
    const [buy5,setBuy5]=useState(false)
    const [buy6,setBuy6]=useState(false)

const handleAddBuy1=()=>{
    setBuy1(true)
    toast("Add To Special Offer Toy");
}
const handleAddBuy2=()=>{
    setBuy2(true)
    toast("Add To Special Offer Toy");
}
const handleAddBuy3=()=>{
    setBuy3(true)
    toast("Add To Special Offer Toy");
}
const handleAddBuy4=()=>{
    setBuy4(true)
    toast("Add To Special Offer Toy");
}
const handleAddBuy5=()=>{
    setBuy5(true)
    toast("Add To Special Offer Toy");
}
const handleAddBuy6=()=>{
    setBuy6(true)
    toast("Add To Special Offer Toy");
}

    return (
        <div>
            <h1 className='mx-auto container  text-3xl mt-20 text-center text-teal-400'>  Special Offers</h1>


         <div className='grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 gap-7 mx-auto container mt-12'>



         <div className="card card-compact w-96 bg-base-100 mx-auto shadow-xl">
                <figure><img src={tShirt} alt="Shoes" className='h-64 w-full' /></figure>
                <div className="card-body bg-green-200">
                    <h2 className="card-title">Giant Teddy Bear</h2>
                    <p className='font-normal text-black'>Price:$200</p>
                    <p className='font-normal text-black'>Quantity:6</p>
                    <div className="card-actions">
                        <button onClick={handleAddBuy1} disabled={buy1} className="btn btn-outline btn-secondary w-full">Add to Buy Now</button>
                    </div>
                </div>
            </div>


            <div className="card card-compact w-96 bg-base-100 mx-auto shadow-xl">
                <figure><img src={tShirt2} alt="Shoes" className='h-64 w-full' /></figure>
                <div className="card-body bg-green-200">
                    <h2 className="card-title">Teddy Bear with Bow</h2>
                    <p className='font-normal text-black'>Price:$300</p>
                    <p className='font-normal text-black'>Quantity:7</p>
                    <div className="card-actions">
                        <button onClick={handleAddBuy2} disabled={buy2} className="btn btn-outline btn-secondary w-full">Add to Buy Now</button>
                    </div>
                </div>
            </div>





            <div className="card card-compact w-96 bg-base-100 mx-auto shadow-xl">
                <figure><img src={watch} alt="Shoes" className='h-64 w-full' /></figure>
                <div className="card-body bg-green-200">
                    <h2 className="card-title">Triceratops watch Toy</h2>
                    <p className='font-normal text-black'>Price:$350</p>
                    <p className='font-normal text-black'>Quantity:7</p>
                    <div className="card-actions">
                        <button onClick={handleAddBuy3} disabled={buy3} className="btn btn-outline btn-secondary w-full">Add to Buy Now</button>
                    </div>
                </div>
            </div>


            <div className="card card-compact w-96 bg-base-100 mx-auto shadow-xl">
                <figure><img src={watch2} alt="Shoes" className='h-64 w-full' /></figure>
                <div className="card-body bg-green-200">
                    <h2 className="card-title">Stegosaurus  watch Toy</h2>
                    <p className='font-normal text-black'>Price:$250</p>
                    <p className='font-normal text-black'>Quantity:6</p>
                    <div className="card-actions">
                        <button onClick={handleAddBuy4} disabled={buy4} className="btn btn-outline btn-secondary w-full">Add to Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 mx-auto shadow-xl">
                <figure><img src={sunglass} alt="Shoes" className='h-64 w-full' /></figure>
                <div className="card-body bg-green-200">
                    <h2 className="card-title">Squeaky sunglass Toy</h2>
                    <p className='font-normal text-black'>Price:$200</p>
                    <p className='font-normal text-black'>Quantity:8</p>
                    <div className="card-actions">
                        <button onClick={handleAddBuy5} disabled={buy5} className="btn btn-outline btn-secondary w-full">Add to Buy Now</button>
                    </div>
                </div>
            </div>



            <div className="card card-compact w-96 bg-base-100 mx-auto shadow-xl">
                <figure><img src={sunglass2} alt="Shoes" className='h-64 w-full' /></figure>
                <div className="card-body bg-green-200">
                    <h2 className="card-title">Rope sunglass Toy</h2>
                    <p className='font-normal text-black'>Price:$300</p>
                    <p className='font-normal text-black'>Quantity:7</p>
                    <div className="card-actions">
                        <button onClick={handleAddBuy6} disabled={buy6} className="btn btn-outline btn-secondary w-full">Add to Buy Now</button>
                    </div>
                </div>
            </div>



         </div>

        </div>
    );
};

export default SpecialOffers;