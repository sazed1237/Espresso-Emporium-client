import React from 'react';
import { FaBeer, FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const CoffeeCard = ({ coffee, setCoffees, coffees }) => {

    const { _id, name, chef, supplier, taste, category, details, price, photo } = coffee;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== id);
                            setCoffees(remaining);
                        }
                    })
            }
        });
        console.log(id)
    }

    return (
        <div>
            <div className="card h-[200px] bg-[#F5F4F1] w-full card-side ">
                <figure><img className='md:w-[120px] w-[100px] md:mx-8' src={photo} alt="Movie" /></figure>
                <div className="line-clamp-6 flex justify-between self-center md:w-full px-3">
                    <div>
                        <h3><small className='font-bold'>Name: </small>{name}</h3>
                        <p ><small className='font-bold '>Chef:</small> {chef} </p>
                        <p ><small className='font-bold '>Details:</small> {details} </p>
                        <p ><small className='font-bold '>Price:</small> {price} </p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-2 text-white">
                            <Link to={`details/${_id}`}>
                                <button className="btn-sm rounded-md bg-[#D2B48C]"><FaEye className='text-white text-xl'></FaEye></button>
                            </Link>
                            <Link to={`updateCoffee/${_id}`}>
                                <button className="btn-sm rounded-md bg-[#3C393B]"><FaEdit className='text-white text-xl'></FaEdit></button>
                            </Link>
                            <button className="btn-sm rounded-md bg-[#EA4744]"
                                onClick={() => handleDelete(_id)}
                            ><FaTrash className='text-white text-xl'></FaTrash></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;