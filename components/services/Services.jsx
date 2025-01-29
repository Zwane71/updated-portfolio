import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "motion/react"

const Services = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='services' className=' w-full px-[12%] py-10 scroll-m-20'>
      <motion.h4
      initial={{y:-20, opacity:0}}
      whileInView={{opacity:1, y:0}}
      transition={{delay:0.3, duration:0.5}}
      className='text-center mb-2 text-lg font-Ovo '>What I offer</motion.h4>
      <motion.h2
      initial={{y:-20, opacity:0}}
      whileInView={{opacity:1, y:0}}
      transition={{delay:0.5, duration:0.5}}
      className='text-center text-5xl font-Ovo'>My Services</motion.h2>
      <motion.p
      initial={{y:-20, opacity:0}}
      whileInView={{opacity:1, y:0}}
      transition={{delay:0.7, duration:0.5}}
      className='text-center max-w-2xl mx-auto mt-5 mb-5 font-Ovo'>
        Offering expertise in responsive websites, mobile apps,
         and user-centric design, blending creativity with technical
          development to deliver intuitive and visually engaging digital products.
      </motion.p>
      <motion.div
      initial={{y:-20, opacity:0}}
      whileInView={{opacity:1, y:0}}
      transition={{delay:0.9, duration:0.5}}
      className='grid grid-cols-auto gap-6 my-10'>
        
            {serviceData.map(({icon, title, description, link}, index) => (
                <motion.div
                whileHover={{scale:1.05}}
                className='border border-gray-400 rounded-lg px-8 py-12 
                hover:shadow-black hover:bg-lightHover cursor-pointer 
                hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'
                 key={index}>
                  <Image src={icon} alt={title} className='w-10' />
                  <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title} </h3>
                  <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description} </p>
                  <Link href={link} className='flex items-center gap-2 text-sm mt-5 dark:text-white'>Read more <Image src={assets.right_arrow} alt='' className='w-4'/></Link>  
                </motion.div>
            ))}
        

      </motion.div>
    </motion.div>
  )
}

export default Services
