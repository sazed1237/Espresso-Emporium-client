import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className='heroBanner md:h-[600px]  grid md:grid-cols-2 gap-5 w-full justify-center items-center text-white'>
                <div>
                </div>
                <div className='mx-2 my-3'>
                    <h1 className='text-xl md:text-3xl mb-4'>Would you like a Cup of Delicious Coffee?</h1>
                    <p className='text-[12px] text-[#beb8b8] md:my-8'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of 
                    <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='bg-[#E3B577] text-[#242222] md:text-[20px] md:h-[48px] md:w-[130px] h-[38px] w-[100px] rounded-md my-3'>Learn More</button>
                </div>
            </div>

            <div className='bg-[#ECEAE3] grid grid-cols-2 md:grid-cols-4  gap-5 w-full  px-2 md:px-36'>
                <div className='md:my-3'>
                    <img className='md:w-[50px] md:h-[50px] w-[30px] h-[30px] my-2' src="https://i.ibb.co/v4GMTL2/1.png" alt="" />                    
                    <h3 className='md:text-2xl text-xl'>Awesome Aroma</h3>
                    <p className='text-sm'>You will definitely be a fan of the design
                    & aroma of your coffee</p>
                </div>
                <div className='md:my-3'>
                <img className='md:w-[50px] md:h-[50px] w-[30px] h-[30px] my-2' src="https://i.ibb.co/gtd9FzV/2.png" alt="" />
                    <h3 className='md:text-2xl text-xl'>High Quality</h3>
                    <p className='text-sm'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='md:my-3'>
                <img className='md:w-[50px] md:h-[50px] w-[30px] h-[30px] my-2' src="https://i.ibb.co/NZ7jW4v/3.png" alt="" />
                    <h3 className='md:text-2xl text-xl'>Pure Grades</h3>
                    <p className='text-sm'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='md:my-3'>
                <img className='md:w-[50px] md:h-[50px] w-[30px] h-[30px] my-2' src="https://i.ibb.co/LkwRXRs/4.png" alt="" />
                    <h3 className='md:text-2xl text-xl'>Proper Roasting</h3>
                    <p className='text-sm'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};



export default Hero;