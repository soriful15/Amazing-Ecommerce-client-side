import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxioSecure';


const img_hosting_token = import.meta.env.VITE_img_upload_token
console.log(img_hosting_token)


const AddProduct = () => {
    const { user } = useAuth()

    const [axiosSecure] = useAxiosSecure()
    const img_hosting_url = ` https://api.imgbb.com/1/upload?key=${img_hosting_token}`
   
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const fromData = new FormData();
        fromData.append('image', data.productImg[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    // console.log(imageResponse)
                    const imgUrl = imageResponse.data.display_url
                    // console.log(data, imgUrl) 
                    const { productName,brand, email, quantity, price,category, details } = data
                    const newProduct = { productImg: imgUrl, productName,brand, email, quantity, price,category, details }
                    axiosSecure.post('/addProduct', newProduct)
                        .then(data => {
                            console.log('after posting new newProduct item', data.data)
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Product Add has been Succeed',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }

            })

    }

    return (
        <>

            <Helmet>
                <title>Amazing Ecommerce | Add Product Page</title>
            </Helmet>

            <h1 className='lg:text-3xl text-lg font-bold my-3 text-center'>Hello <span className='text-violet-700'>{user && user.displayName}</span> Welcome To DashBoard</h1>
            <div className="border-t-4 border-orange-700 mb-5 w-3/4 mx-auto "></div>

            <div className='container mx-auto px-3'>

                <h1 className='text-center mt-10 lg:text-4xl text-lg text-sky-800 '>Add Product</h1>


                <form onSubmit={handleSubmit(onSubmit)} className='mt-16 lg:px-7'>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className='grid lg:grid-cols-2 gap-4 px-2'>


                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Product Image</span>

                            </label>
                            <input type="file"     {...register("productImg", { required: true })} className="file-input file-input-bordered w-full" />

                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>

                            <input type="text" placeholder="Enter Classes Name" className="input input-bordered"  {...register("productName")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" placeholder="Brand Name" className="input input-bordered" {...register("brand", { required: true })} />
                        </div>


                      


                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                 <input type="text" placeholder="Enter Your Email" className="input input-bordered" defaultValue={user?.email} {...register("email")} />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" placeholder="Quantity" className="input input-bordered" {...register("quantity", { required: true })} />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="price" className="input input-bordered" {...register("price", { required: true })} />
                        </div>

                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select {...register("category")} className="input input-bordered">
                                <option value="T-Shirt">T-Shirt</option>
                                <option value="shoe">shoe</option>
                                <option value="Sunglass">Sunglass</option>
                                <option value="Pent">Pent</option>
                            </select>

                        </div>

                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>

                            <input type="text" placeholder="Details" className="input input-bordered"  {...register("details")} />
                        </div>
                    </div>
                    <div className="form-control mt-6">

                        <input className='btn btn-success btn-block' type="submit" value="Add Product" />
                    </div>

                </form>


            </div>



        </>
    );
};

export default AddProduct;
