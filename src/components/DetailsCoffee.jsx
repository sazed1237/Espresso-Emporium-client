import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const DetailsCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, chef, supplier, taste, category, details, price, photo } = coffee;
    return (
        <div className='bg'>

            <div className='py-8'>
                <button className='pl-2 ml-2 md:pl-52 '>
                    <Link to={'/'} className='flex items-center font-medium'> <FaArrowLeft className='mr-2'></FaArrowLeft> Back to Home</Link>
                </button>
            </div>

            <div className='m-auto bg-[#F4F3F0] md:w-[720px] rounded-md'>
                <div className="card md:card-side">
                    <figure><img className='md:h-[300px] md:w-[250px] h-[150px] w-[120px] m-4 ' src={photo} alt="Movie" /></figure>
                    <div className="md:ml-14 ml-4 md:mt-10 mb-4 ">
                        <h2 className="card-title text-2xl md:mb-8 mb-3">Details</h2>
                        <p className='font-medium mb-1'>Name: <span className='font-normal'>{name}</span></p>
                        <p className='font-medium mb-1'>Chef: <span className='font-normal'>{chef}</span></p>
                        <p className='font-medium mb-1'>Supplier: <span className='font-normal'>{supplier}</span></p>
                        <p className='font-medium mb-1'>Taste: <span className='font-normal'>{taste}</span></p>
                        <p className='font-medium mb-1'>Category: <span className='font-normal'>{category}</span></p>
                        <p className='font-medium mb-1'>Details: <span className='font-normal'>{details}</span></p>

                    </div>
                        
                </div>
            </div>
        </div>
    );
};

export default DetailsCoffee;