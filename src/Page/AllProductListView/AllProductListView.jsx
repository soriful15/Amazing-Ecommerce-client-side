import React from 'react';
import useAxiosSecure from '../../hooks/useAxioSecure';
import { useQuery } from '@tanstack/react-query';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaEye } from "react-icons/fa";


const AllProductListView = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: allProducts = [] } = useQuery(['allProduct'], async () => {

        const res = await axiosSecure.get(`/allProduct`)
        return res.data

    })
    console.log(allProducts)
    return (
        <>
            <div className='container mx-auto mt-10'>
                <h1 className='text-center md:text-5xl text-2xl text-teal-800'>All Product List View</h1>

                <Tabs className='text-center mt-6   lg:py-5'>
                    <TabList className='lg:text-2xl text-purple-900'>
                        <Tab>T-Shirt</Tab>
                        <Tab>shoe</Tab>
                        <Tab>Sunglass</Tab>
                        {/* <Tab>Watch</Tab> */}
                    </TabList>
                    <TabPanel className='mt-10'>
                        <div className='lg:flex  lg:flex-wrap  lg:items-center  lg:justify-center gap-6 md:grid md:grid-cols-2'>
                            {allProducts
                                .filter(Product => Product.category === 'T-Shirt')

                                .map((Product, index) => (
                                    <div className='card card-compact shadow-2xl md:w-96 w-full bg-base-100 relative' key={index}>
                                        <figure><img src={Product.productImg} className='h-72 w-full' alt="Shoes" /></figure>
                                        <p className='absolute right-0 bg-slate-900 text-white  mr-4 mt-4 px-4 py-2'>${Product.price}</p>
                                        <div className='absolute left-0 mt-4 px-4 py-2'>
                                            <p className=' btn w-20  btn-neutral btn-sm font-bold text-cyan-400 flex'><FaEye></FaEye></p>
                                        </div>
                                        <div className=" card-body ">
                                            <h2 className="card-title text-black">{Product.productName}</h2>

                                            <p className='font-semibold text-black flex'>Brand: <span className='ml-1'>{Product.brand}</span></p>
                                            {/* <div className='flex justify-between items-center'>
                                                <div>

                                                    <p>Quantity:{Product.quantity} </p>
                                                </div>
                                                <div className=''>
                                                    <p className=' btn w-20  btn-outline btn-info btn-sm font-bold text-cyan-400 flex'><FaEye></FaEye></p>
                                                </div>
                                            </div> */}
                                            <div className='flex items-center'>

                                                <Rating style={{ maxWidth: 150 }} value={Math.round(Product?.ratings) || 0} readOnly /><span className='ms-2'> ({Product?.ratings})</span>
                                            </div>
                                            

                                            <div className="card-actions">
                                                <button className='btn btn-primary w-full btn-outline'>Add to Select</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='lg:flex  lg:flex-wrap  lg:items-center  lg:justify-center gap-6 grid md:grid-cols-2   '>
                            {allProducts
                                .filter(Product => Product.category === 'shoe')
                                .map((Product, index) => (
                                    <div className='card card-compact shadow-2xl md:w-96 w-full bg-base-100 relative' key={index}>
                                        <figure><img src={Product.productImg} className='h-72 w-full' alt="Shoes" /></figure>
                                        <p className='absolute right-0 bg-slate-900 text-white  mr-4 mt-4 px-4 py-2'>${Product.price}</p>
                                        <div className='absolute left-0 mt-4 px-4 py-2'>
                                            <p className=' btn w-20  btn-neutral btn-sm font-bold text-cyan-400 flex'><FaEye></FaEye></p>
                                        </div>
                                        <div className=" card-body ">
                                            <h2 className="card-title text-black">{Product.productName}</h2>

                                            <p className='font-semibold text-black flex'>Brand: <span className='ml-1'>{Product.brand}</span></p>

                                            <div className='flex items-center'>

                                                <Rating style={{ maxWidth: 150 }} value={Math.round(Product?.ratings) || 0} readOnly /><span className='ms-2'> ({Product?.ratings})</span>
                                            </div>
                                           

                                            <div className="card-actions">
                                                <button className='btn btn-primary w-full btn-outline'>Add to Select</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='lg:flex  lg:flex-wrap  lg:items-center  lg:justify-center gap-6 grid md:grid-cols-2'>
                            {allProducts
                                .filter(Product => Product.category === 'Sunglass')
                                .map((Product, index) => (
                                    <div className='card card-compact shadow-2xl md:w-96 w-full bg-base-100 relative' key={index}>
                                        <figure><img src={Product.productImg} className='h-72 w-full' alt="Shoes" /></figure>
                                        <p className='absolute right-0 bg-slate-900 text-white  mr-4 mt-4 px-4 py-2'>${Product.price}</p>
                                        <div className='absolute left-0 mt-4 px-4 py-2'>
                                            <p className=' btn w-20  btn-neutral btn-sm font-bold text-cyan-400 flex'><FaEye></FaEye></p>
                                        </div>
                                        <div className=" card-body ">
                                            <h2 className="card-title text-black">{Product.productName}</h2>

                                            <p className='font-semibold text-black flex'>Brand: <span className='ml-1'>{Product.brand}</span></p>

                                            <div className='flex items-center'>

                                                <Rating style={{ maxWidth: 150 }} value={Math.round(Product?.ratings) || 0} readOnly /><span className='ms-2'> ({Product?.ratings})</span>
                                            </div>
                                            

                                            <div className="card-actions">
                                                <button className='btn btn-primary w-full btn-outline'>Add to Select</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </TabPanel>



                    {/* <TabPanel>
                        <div className='lg:flex  lg:flex-wrap  lg:items-center  lg:justify-center gap-6 grid md:grid-cols-2'>
                            {allProducts
                                .filter(Product => Product.category === 'Watch')
                                .map((Product, index) => (
                                    <div className='card card-compact shadow-2xl md:w-96 w-full bg-base-100 relative' key={index}>
                                        <figure><img src={Product.productImg} className='h-72 w-full' alt="Shoes" /></figure>
                                        <p className='absolute right-0 bg-slate-900 text-white  mr-4 mt-4 px-4 py-2'>${Product.price}</p>
                                        <div className='absolute left-0 mt-4 px-4 py-2'>
                                            <p className=' btn w-20  btn-neutral btn-sm font-bold text-cyan-400 flex'><FaEye></FaEye></p>
                                        </div>
                                        <div className=" card-body ">
                                            <h2 className="card-title text-black">{Product.productName}</h2>

                                            <p className='font-semibold text-black flex'>Brand: <span className='ml-1'>{Product.brand}</span></p>

                                            <div className='flex items-center'>

                                                <Rating style={{ maxWidth: 150 }} value={Math.round(Product?.ratings) || 0} readOnly /><span className='ms-2'> ({Product?.ratings})</span>
                                            </div>
                                            

                                            <div className="card-actions">
                                                <button className='btn btn-primary w-full btn-outline'>Add to Select</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </TabPanel> */}




                </Tabs>




            </div>
        </>
    );
};

export default AllProductListView;