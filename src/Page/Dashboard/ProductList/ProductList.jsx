import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxioSecure';

const ProductList = () => {
    const { user } = useAuth()


    const [axiosSecure] = useAxiosSecure();
    const { data: allProducts = [] } = useQuery(['allProduct'], async () => {

        const res = await axiosSecure.get(`/allProduct`)
        return res.data

    })
    console.log(allProducts)








    
    return (
        <>

            <Helmet>
                <title>Amazing Ecommerce | Product List  Page</title>
            </Helmet>
            <h1 className='lg:text-3xl text-lg font-bold my-3 text-center'>Hello <span className='text-violet-700'>{user && user.displayName}</span> Welcome To DashBoard</h1>
            <div className="border-t-4 border-orange-700 mb-5 w-3/4 mx-auto "></div>




            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-black'>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>ProductName</th>
                                <th>Brand</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Ratings</th>
                            
                              
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                allProducts.map((allProduct, index) =>
                                    <tr key={allProduct._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={allProduct.productImg} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-base font-bold'>
                                            {allProduct.productName}
                                        </td>
                                        <td className='text-yellow-400'>{allProduct.brand}</td>
                                        <td className='text-indigo-700'>{allProduct.category}</td>
                     <td className='text-pink-800'> {allProduct.quantity}</td>
                                        <td className='text-green-800'>${allProduct.price}</td>
                                        <td className='text-purple-900'>{allProduct.ratings}</td>
                                       
                                       


                                    </tr>

                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>


        </>
    );
};

export default ProductList;