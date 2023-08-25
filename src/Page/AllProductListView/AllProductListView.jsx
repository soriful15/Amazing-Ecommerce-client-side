import React, { useContext } from 'react';
import useAxiosSecure from '../../hooks/useAxioSecure';
import { useQuery } from '@tanstack/react-query';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
// import { FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useCart from '../../hooks/useCart';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';


const AllProductListView = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: allProducts = [] } = useQuery(['allProduct'], async () => {

        const res = await axiosSecure.get(`/allProduct`)
        return res.data

    })
    console.log(allProducts)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch] = useCart()




    const handleAddSelect = (Product) => {
      
    
        console.log(Product)
        if (user && user.email) {
          const selectedItemCard = {
            selectedItemId:Product._id, productImg:Product.productImg, ratings:Product.ratings,
            email: user.email,price:Product.price, productName:Product.productName 
          }
          fetch(`https://amazing-ecommerce-server-side.vercel.app/carts`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(selectedItemCard)
          })
            .then(res => res.json())
            .then(data => {
              if (data.insertedId) {
                refetch()
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: `You have Selected the Course${user.displayName}`,
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
        }
    
        else {
          Swal.fire({
            title: 'Please Login To Select the cart',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login Now'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', { state: { from: location } })
            }
          })
        }
    
    
      }


    return (
        <>
         <Helmet>
                <title>Amazing Ecommerce | AllProductListView Page</title>
            </Helmet>
            <div className='container mx-auto mt-10'>
                <h1 className='text-center md:text-5xl text-2xl text-teal-800'>All Product List View</h1>

                <Tabs className='text-center mt-6   lg:py-5'>
                    <TabList className='lg:text-2xl text-purple-900'>
                        <Tab>T-Shirt</Tab>
                        <Tab>shoe</Tab>
                        <Tab>Sunglass</Tab>
                        <Tab>Watch</Tab>
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
<Link to={`/productDetailsView/${Product._id}`}> <p className=' btn w-20  btn-neutral btn-sm font-bold text-cyan-400 flex'>view</p></Link>
                                        </div>
                                        <div className=" card-body ">
                                            <h2 className="card-title text-black">{Product.productName}</h2>

                                            <p className='font-semibold text-black flex'>Brand: <span className='ml-1'>{Product.brand}</span></p>
                                        
                                            <div className='flex items-center'>

                                                <Rating style={{ maxWidth: 150 }} value={Math.round(Product?.ratings) || 0} readOnly /><span className='ms-2'> ({Product?.ratings})</span>
                                            </div>
                                            

                                            <div className="card-actions">
 <button onClick={() => handleAddSelect(Product)} className='btn btn-primary w-full btn-outline'>Add to Cart</button>
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
                     <Link to={`/productDetailsView/${Product._id}`}> <p className=' btn w-20  btn-neutral btn-sm font-bold text-cyan-400 flex'>view</p></Link>
                                        </div>
                                        <div className=" card-body ">
                                            <h2 className="card-title text-black">{Product.productName}</h2>

                                            <p className='font-semibold text-black flex'>Brand: <span className='ml-1'>{Product.brand}</span></p>

                                            <div className='flex items-center'>

                                                <Rating style={{ maxWidth: 150 }} value={Math.round(Product?.ratings) || 0} readOnly /><span className='ms-2'> ({Product?.ratings})</span>
                                            </div>
                                           

                                            <div className="card-actions">
                                                <button onClick={() => handleAddSelect(Product)} className='btn btn-primary w-full btn-outline'>Add to Cart</button>
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
                                        <Link to={`/productDetailsView/${Product._id}`}> <p className=' btn w-20  btn-neutral btn-sm font-bold text-cyan-400 flex'>view</p></Link>
                                        </div>
                                        <div className=" card-body ">
                                            <h2 className="card-title text-black">{Product.productName}</h2>

                                            <p className='font-semibold text-black flex'>Brand: <span className='ml-1'>{Product.brand}</span></p>

                                            <div className='flex items-center'>

                                                <Rating style={{ maxWidth: 150 }} value={Math.round(Product?.ratings) || 0} readOnly /><span className='ms-2'> ({Product?.ratings})</span>
                                            </div>
                                            

                                            <div className="card-actions">
                                                <button onClick={() => handleAddSelect(Product)} className='btn btn-primary w-full btn-outline'>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </TabPanel>



                    <TabPanel>
                        <div className='lg:flex  lg:flex-wrap  lg:items-center  lg:justify-center gap-6 grid md:grid-cols-2'>
                            {allProducts
                                .filter(Product => Product.category === 'Watch')
                                .map((Product, index) => (
                                    <div className='card card-compact shadow-2xl md:w-96 w-full bg-base-100 relative' key={index}>
                                        <figure><img src={Product.productImg} className='h-72 w-full' alt="Shoes" /></figure>
                                        <p className='absolute right-0 bg-slate-900 text-white  mr-4 mt-4 px-4 py-2'>${Product.price}</p>
                                        <div className='absolute left-0 mt-4 px-4 py-2'>
                                          <Link to={`/productDetailsView/${Product._id}`}> <p className=' btn w-20  btn-neutral btn-sm font-bold text-cyan-400 flex'>view</p></Link>
                                        </div>
                                        <div className=" card-body ">
                                            <h2 className="card-title text-black">{Product.productName}</h2>

                                            <p className='font-semibold text-black flex'>Brand: <span className='ml-1'>{Product.brand}</span></p>

                                            <div className='flex items-center'>

                                                <Rating style={{ maxWidth: 150 }} value={Math.round(Product?.ratings) || 0} readOnly /><span className='ms-2'> ({Product?.ratings})</span>
                                            </div>
                                            

                                            <div className="card-actions">
                                                <button onClick={() => handleAddSelect(Product)} className='btn btn-primary w-full btn-outline'>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </TabPanel>




                </Tabs>




            </div>
        </>
    );
};

export default AllProductListView;