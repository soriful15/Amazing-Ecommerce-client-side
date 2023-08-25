import React from 'react';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

import useCart from '../../hooks/useCart';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'
const CartView = () => {

    const [cart, refetch] = useCart()
    const handleDeleteBtn = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://amazing-ecommerce-server-side.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <>

            <Helmet>
                <title>Amazing Ecommerce | CartView Page</title>
            </Helmet>
            <h1 className='lg:text-3xl text-center text-lg  mt-4 mb-4 text-emerald-300'>Total Select Cart: {cart.length}</h1>

           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>


           {
                cart.map((item, index) => (
                    <div className="w-96  bg-base-100 shadow-xl border-4 border-solid mx-auto border-indigo-100 rounded-lg" key={index}>
                        <figure className="px-10 pt-10">
                            <img src={item.productImg}  className="rounded-xl w-96 h-60" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-blue-600">{item.productName}</h2>
                            <p className='text-green-700 font-normal'>Price: ${item.price}</p>
                            <div className='flex items-center'>

                                <Rating style={{ maxWidth: 150 }} value={Math.round(item?.ratings) || 0} readOnly /><span className='ms-2'> {item?.ratings}</span>
                            </div>
                            <div className="card-actions">
                                 <button onClick={() => handleDeleteBtn(item)} className="btn btn-error">Remove Cart</button>
                            </div>
                        </div>
                    </div>


                ))
                        }

           </div>




        </>
    );
};

export default CartView;