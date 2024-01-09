import React from 'react'
import Typed from 'react-typed';
import fondo from '../assets/fondo.avif'


function Hero() {
    return (
        <div className='snap-y snap-mandatory w-screen h-screen overflow-x-hidden'>

            <div className=' max-w-[800px] my-32 w-full mx-auto text-center flex flex-col justify-center'>
                <p className='text-transform: capitalize text-2xl font-bold text-gray p-2 '>Experience endodontic care</p>
                <h1 className='text-6xl font-semibold p-4 text-primary lg:text-8xl'>ROOT CANAL TREATMENT</h1>
                <div>
                    <Typed className='md:text-4xl sm:text-3xl text-xl text-transform: capitalize font-medium text-secondary'
                        strings={['Advanced Treatment Methods', 'Prompt Emergency Care', 'Flexible Financial Options', 'Se habla Español']}
                        typeSpeed={40}
                        backSpeed={20}
                        loop
                    />
                </div>
              
            </div>
            <div className='relative bottom-11 flex justify-center justify-items-center m-auto'>
                <button className='bg-secondary mx-3 py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-800 md:text-xl lg:text-3xl'>Refer now</button>
                <button className='bg-secondary mx-3 py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-800 md:text-xl lg:text-3xl '>About us</button>

            </div>
            

        </div>
    )
}

export default Hero
