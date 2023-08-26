import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxioSecure';

const OrderList = () => {
    const { user } = useAuth()


    const [axiosSecure] = useAxiosSecure();
    const { data: orderList = [] } = useQuery(['orderList'], async () => {

        const res = await axiosSecure.get(`/orderList`)
        return res.data

    })
    console.log(orderList)








    
    return (
        <>

            <Helmet>
                <title>Amazing Ecommerce | orderList List  Page</title>
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
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>ProductName</th>
                                <th>Price</th>
                               
                            
                              
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                orderList.map((orderList, index) =>
                                    <tr key={orderList._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td className='text-base font-bold'>
                                            {orderList.name}
                                        </td>
                                        <td className='text-yellow-400'>{orderList.email}</td>
                                        <td className='text-indigo-700'>{orderList.phone}</td>
                     <td className='text-pink-800'> {orderList.address}</td>
                                        <td className='text-purple-900'>{orderList.product_name}</td>
                                        <td className='text-green-800'>${orderList.price}</td>
                                       
                                       


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

export default OrderList;