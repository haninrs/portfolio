/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { AnimatedTooltip } from './ui/animated-tooltip'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img
            src="/footer-grid.svg"
            alt="footer grid"
            className='w-full h-full opacity-100'
            />
        </div>

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take <span className='text-purple'>your</span> digital presence to the next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out me today and let&apos;s discuss how I can help you achieve your goals.</p>
            <a href="mailto:hanitrp@gmail.com">
                <MagicButton 
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col items-center justify-between gap-2 md:gap-0'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright &copy; {new Date().getFullYear()} Hani Nur Aisyah</p>

            <div className='flex items-center md:gap-3 gap-6'>
                <AnimatedTooltip items={socialMedia}/>
            </div>
        </div>
    </footer>
  )
}

export default Footer