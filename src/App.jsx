import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'
import Hero from './components/Hero'
import { FaCoffee } from 'react-icons/fa'

function App() {

  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <>
      <Hero></Hero>
      <div className='cardImgBG w-full'>

        <div className='mt-10'>
          <div className='text-center'>
            <p><small>---Sip & Savor---</small></p>
            <h2 className=' text-3xl font-semibold'>Our Popular Products</h2>
          </div>
          <div className='flex justify-center'>
            <button className='flex justify-center my-3 w-[120px] bg-[#E3B577] rounded-md'>
              <Link className='flex justify-center items-center  h-[30px]   ' to={`/addCoffee`}>
                Add Coffee <FaCoffee className='text-[#331A15] ml-2 '></FaCoffee>
              </Link>
            </button>
          </div>
        </div>

        <div className='m-3 md:mx-24 '>
          <div className='grid md:grid-cols-2 gap-5 '>
            {
              coffees.map(coffee => <CoffeeCard
                key={coffee._id}
                coffee={coffee}
                coffees={coffees}
                setCoffees={setCoffees}
              ></CoffeeCard>)
            }
          </div>
        </div>

        <div className='mt-10'>
          <div className='text-center'>
            <p><small>---Sip & Savor---</small></p>
            <h2 className=' text-3xl font-semibold'>Our Popular Products</h2>
          </div>
          <div className='flex justify-center'>
            <button className='flex justify-center my-3 w-[120px] bg-[#E3B577] rounded-md'>
              <Link className='flex justify-center items-center  h-[30px]   ' to={`/addCoffee`}>
                Add Coffee <FaCoffee className='text-[#331A15] ml-2 '></FaCoffee>
              </Link>
            </button>
          </div>
        </div>                      
      </div>
    </>
  )
}

export default App
