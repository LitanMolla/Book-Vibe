import React from 'react'
import { Link } from 'react-router'
import mh from '../../assets/mh.png'

const Hero = () => {
  return (
    <>
      <div className="bg-gray-100 md:py-20 md:px-30 rounded-lg p-10">
        <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-5">
          <div className="md:w-2/3 space-y-5">
            <h1 className='text-4xl font-bold'>Books to freshen up your bookshelf</h1>
            <Link className='text-gray-100 bg-green-500 px-5 py-2 border inline-block rounded-md duration-300 hover:bg-green-600'>View The List</Link>
          </div>
          <div className="md:w-1/3">
            <img className='w-full rounded-md border border-gray-200 shadow shadow-gray-200' src={mh} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;