import React from 'react';
import useAxiosSecure from '../../../hooks/useAxioSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
const CustomersList = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], } = useQuery(['allCollectionUsers'], async () => {
     
        const res = await axiosSecure.get(`/allCollectionUsers`)
       
        return res.data

    })
console.log(users)
    return (
        <>
            <Helmet>
        <title>Amazing Ecommerce | Customer List Page</title>
      </Helmet>

      <h1 className='lg:text-3xl text-lg font-bold my-3 text-center'>Hello <span className='text-violet-700'>{user && user.displayName}</span> Welcome To DashBoard</h1>
            <div className="border-t-4 border-orange-700 mb-5 w-3/4 mx-auto "></div>


            <div className='w-3/4 mt-10'>

<div className="overflow-x-auto">
    <table className="table table-zebra w-full">
        {/* head */}
        <thead className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-black'>
            <tr>
                <th>#</th>
                <th>Image</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>Phone Number</th>
            </tr>
        </thead>
        <tbody>
            {/* row 1 */}
            {
                users.map((user, index) =>
                    <tr key={user._id}>
                        <th>{index + 1}</th>
                        <th>   <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={user.photoURL} className='' alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div></th>
                        <td className='text-base font-bold'>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.number? user.number: 'No Number'}</td>
                       

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

export default CustomersList;