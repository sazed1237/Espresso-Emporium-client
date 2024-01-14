import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaMapMarkerAlt, FaPhone, FaTwitter, } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='mt-14'>
            <div className='footerImg  grid md:grid-cols-2 gap-5 w-full justify-center items-center'>
                <div className=' md:pl-24 mx-2'>
                    <img className='my-3 w-[50px]' src={logo} alt="" />
                    <h2 className='text-[#331A15] font-semibold md:text-3xl text-2xl'>Espresso Emporium</h2>
                    <p className='text-[#1B1A1A] my-4 md:text-[20px]'>Always ready to be your friend. Come & Contact with us to share your
                        memorable moments, to share with your best companion.</p>

                    <div className='flex my-2'>
                        <a className='mr-2 ' href="#"><FaFacebook className='md:h-[30px] md:w-[30px]'></FaFacebook></a>
                        <a className='mr-2 ' href="#"><FaTwitter className='md:h-[30px] md:w-[30px]'></FaTwitter></a>
                        <a className='mr-2 ' href="#"><FaInstagram className='md:h-[30px] md:w-[30px]'></FaInstagram></a>
                        <a className='mr-2 ' href="#"><FaLinkedin className='md:h-[30px] md:w-[30px]'></FaLinkedin></a>
                    </div>
                    <div className='mb-6'>
                        <h2 className='text-[#331A15] md:text-[40px] text-[25px] font-semibold my-3'>Get in Touch</h2>
                        <a className='items-center flex' href="#"><FaPhone className='mr-2'></FaPhone> +8801*****</a>
                        <a className='items-center flex' href="#"><FaEnvelope className='mr-2'></FaEnvelope> coffee@info.com</a>
                        <p className='items-center flex'><FaMapMarkerAlt className='mr-2'></FaMapMarkerAlt> 100, Love Road, Mirpur, Dhaka</p>
                    </div>
                </div>

                <div className=' md:pl-24 mx-2'>
                    <h2 className='text-[#331A15] md:text-[40px] text-[25px] font-bold my-6'>Contact with Us</h2>

                    <form>
                        <div className='form-control md:w-1/2 mb-2'>
                            <label className='input-group'>
                                <input type="text" name='name' placeholder="Enter Name" className="input input-bordered input-sm w-full " />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2 mb-2'>
                            <label className='input-group'>
                                <input type="text" name='name' placeholder="Enter Email" className="input input-bordered input-sm w-full " />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2 mb-2'>
                            <label className='input-group'>
                                <textarea placeholder="Massage" className="textarea textarea-bordered w-full" ></textarea>
                            </label>
                        </div>
                        <input className='btn h-[48px] btn-outline mb-4' type="submit" value="Send Message" />
                    </form>
                </div>

            </div>
                <div className='copyRightImg flex items-center justify-center h-[50px]  text-white'>
                    <p className='items-center text-sm'>Copyright Espresso Emporium ! All Rights Reserved</p>
                </div>
        </div>
    );
};

export default Footer;