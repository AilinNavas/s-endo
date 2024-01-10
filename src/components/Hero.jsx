import React from 'react'
import Typed from 'react-typed';
import fondo from '../assets/fondo.avif'


function Hero() {
    return (
        <div className=''>

            <div className=' max-w-[800px] -mt-96px h-screen w-full mx-auto text-center flex flex-col justify-center'>
                <p className='text-transform: capitalize text-2xl font-bold text-gray p-2 '>Experience endodontic care</p>
                <h1 className='text-5xl font-semibold p-4 text-primary md:text-6xl py-6 lg:text-8xl'>ROOT CANAL TREATMENT</h1>
                <div>
                    <Typed className=' md:text-2xl  sm:text-xl lg:text-4xl text-transform: capitalize font-medium text-secondary md:py-4'
                        strings={['Advanced Treatment Methods', 'Prompt Emergency Care', 'Flexible Financial Options', 'Se habla Español']}
                        typeSpeed={40}
                        backSpeed={20}
                        loop
                    />
                </div>
                <button className='bg-trasparent shadow-secondary hover:bg-sky-500 hover:text-primary w-[200px] rounded-md text-xl my-10 m-auto py-4 shadow hover:shadow-2xl text-gray t-24'>Refer Now</button>
            </div>

        </div>
    )
}

export default Hero
