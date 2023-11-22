import React from 'react'
import SocialMedia from './SocialMedia'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='section pt-8 pb-1 text-center bg-black'>
      <div className='rounded-xl w-fit mx-auto p-1'>
        <Image
          src={'/images-outils/logo-killer-tattoo.svg'}
          height={90}
          width={90}
          alt='logo do estúdio de tatuagem killer tattoo'
        />
      </div>
      <SocialMedia />
      <div className='flex justify-center items-center pt-2 font-thin tracking-wider border-t border-gray-900 mt-4'>
        <span className='text-white'>&copy;2023 killer tatoo</span>
      </div>
    </footer>
  )
}
