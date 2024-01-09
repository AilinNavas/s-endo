import React from 'react'
import Fade from 'react-reveal/Fade';
import one from '../assets/1.png'
import { FaHeartCircleCheck } from "react-icons/fa6";


const DentalInsurance = () => {
  return (
    <div className='snap-start'>

      <Fade left>
        <div className=' bg-primary h-screen w-screen'>
          <h2 className='text-white text-4xl pt-8 m-auto md:text-6xl flex justify-center underline underline-offset-8'> <FaHeartCircleCheck className='mr-2' />
            Dental Insurance</h2>
          <p className='text-gray text-lg m-auto text-center p-8'> We accept most dental insurance, including out-of-network, so don't hesitate to schedule with us. Insurance often pays the same for out-of-network treatment as in-network. We are in network with the following insurance providers:</p>
        </div>
        <img class="rounded-full w-96 h-96" src={one} alt="image description" />
      </Fade>
    </div>

  )
};

export default DentalInsurance