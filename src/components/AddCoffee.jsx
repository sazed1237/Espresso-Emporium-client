import React from 'react';
// import bgimg from '../assets/addbg.png';
import './addCoffee.css'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const photo = form.photo.value;

        const newCoffee = { name, chef, supplier, taste, category, details, price, photo }
        console.log(newCoffee)

        // send data to the server
        fetch(`http://localhost:5000/coffee`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }


    return (
        <div className='bg'>
            <div className='py-8'>
                <button className='pl-2 ml-2 md:pl-52 '>
                    <Link to={'/'} className='flex items-center font-medium'> <FaArrowLeft className='mr-2'></FaArrowLeft> Back to Home</Link>
                </button>
            </div>

            <div className='text-center m-auto bg-[#F4F3F0] pt-10 md:w-[920px] '>


                <h3 className='font-extrabold text-[#374151] text-xl md:text-4xl'>Add New Coffee</h3>
                <div className='center m-auto px-4 text-[#5f6c80] md:w-[700px] pt-4'>
                    <p className='text-center' >It is a long established fact that a
                        reader will be distraceted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is that
                        it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                </div>

                <form onSubmit={handleAddCoffee} className='mt-4'>
                    {/* form row */}
                    <div className='md:flex mb-4 md:mx-20 mx-3'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-bold'>Name</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name='name' placeholder="Enter Coffee Name" className="input input-bordered input-sm w-full " />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2 md:ml-4'>
                            <label className='label'>
                                <span className='label-text font-bold'>Chef</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name='chef' placeholder="Enter Chef Name" className="input input-bordered input-sm w-full " />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className='md:flex mb-4 md:mx-20 mx-3'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-bold'>Supplier</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered input-sm w-full " />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2 md:ml-4'>
                            <label className='label'>
                                <span className='label-text font-bold'>Taste</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name='taste' placeholder="Enter Coffee Taste" className="input input-bordered input-sm w-full " />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className='md:flex mb-4 md:mx-20 mx-3'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-bold'>Category</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name='category' placeholder="Enter Coffee Category" className="input input-bordered input-sm w-full " />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2 md:ml-4'>
                            <label className='label'>
                                <span className='label-text font-bold'>Details</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name='details' placeholder="Enter Coffee Details" className="input input-bordered input-sm w-full " />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className='md:flex mb-4 md:mx-20 mx-3'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-bold'>Price</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name='price' placeholder="Enter Coffee Price" className="input input-bordered input-sm w-full " />
                            </label>
                        </div>

                    </div>
                    {/* form Photo URL */}
                    <div className='md:mx-20 mx-3 mb-8'>
                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className='label-text font-bold'>Photo</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name='photo' placeholder="Enter Photo URL" className="input input-bordered input-sm w-full " />
                            </label>
                        </div>
                    </div>
                    {/* form Submit */}
                    <div className='md:mx-20 mx-3'>
                        <input type="submit" className="btn btn-block mb-8 bg-[#D2B48C] border-[#331A15]" value="ADD COFFEE" />
                    </div>
                </form>


            </div>
        </div>
    );
};

export default AddCoffee;