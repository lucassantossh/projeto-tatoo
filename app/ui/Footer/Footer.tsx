import React from 'react'
import SocialMedia from './SocialMedia'

export default function Footer() {
  return (
    <footer className='section pt-8 pb-1 text-center bg-gray-950'>
      <div className='text-white rounded-xl border w-fit mx-auto p-1'>
        killer tattoo
      </div>
      <SocialMedia />
      <div className='flex justify-center items-center pt-2 font-thin tracking-wider border-t border-gray-900 mt-4'>
        <span className='text-white'>&copy;2023 killer tatoo</span>
      </div>
    </footer>
  )
}
