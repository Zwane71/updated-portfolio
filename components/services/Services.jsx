import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className=' w-full px-[12%] py-10 scroll-m-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo '>What I offer</h4>
      <h2 className='text-center text-5xl font-Ovo'>My Services</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-5 font-Ovo'>
        I am a Frontend Developer from the beautiful city of Maseru,
        Lesotho. I've been honing my skills and building user-friendly 
        web interfaces for less than a year, combining creativity with 
        technical expertise to bring ideas to life.  
      </p>
      <div className='grid grid-cols-auto gap-6 my-10'>
        
            {serviceData.map(({icon, title, description, link}, index) => (
                <div className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:bg-lightHover cursor-pointer hover:-translate-y-1 duration-500'
                 key={index}>
                  <Image src={icon} alt={title} className='w-10' />
                  <h3 className='text-lg my-4 text-gray-700'>{title} </h3>
                  <p className='text-sm text-gray-600 leading-5'>{description} </p>
                  <Link href={link} className='flex items-center gap-2 text-sm mt-5'>Read more <Image src={assets.right_arrow} alt='' className='w-4'/></Link>  
                </div>
            ))}
        

      </div>
    </div>
  )
}

export default Services
