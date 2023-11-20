import React from 'react'

import { FaInstagram, FaPinterest } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BsTelephone } from 'react-icons/bs'

import { IconType } from 'react-icons'

type Props = {
  url: string
  icon: IconType
}

const content: Array<Props> = [
  {
    url: 'https://www.instagram.com/_killertattoo/',
    icon: FaInstagram,
  },
  {
    url: 'https://www.instagram.com/_killertattoo/',
    icon: FaInstagram,
  },
  {
    url: 'https://www.instagram.com/_killertattoo/',
    icon: FaInstagram,
  },
]

export default function SocialMedia() {
  return (
    <nav className='mt-4 py-4'>
      <ul className='text-white flex items-center justify-center gap-4'>
        <li className='text-2xl'>
          <a
            href='https://www.instagram.com/_killertattoo/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram />
          </a>
        </li>
        <li className='text-2xl'>
          <a
            href='https://wa.me/5591998165368'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IoLogoWhatsapp />
          </a>
        </li>
        <li className='text-2xl'>
          <a
            href='http://'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaPinterest />
          </a>
        </li>
      </ul>
    </nav>
    // <li className='text-2xl'>
    //   <a
    //     href='http://'
    //     target='_blank'
    //     rel='noopener noreferrer'
    //   >
    //     <ImLocation2 />
    //   </a>
    // </li>
    // <li>
    //   <a
    //     href='tel:+'
    //     className='flex gap-2 items-center p-4 border w-fit'
    //   >
    //     <BsTelephone /> <span>(91) 98583-9244</span>
    //   </a>
    // </li>
  )
}
