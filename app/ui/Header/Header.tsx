'use client'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '@/app/providers/GlobalContext'
import HeaderNavList from './HeaderNavList'
import HeaderHamburguerMobileButton from './HeaderHamburguerMobileButton'
import Link from 'next/link'
import Image from 'next/image'
// import ThemeSwitcher from './ThemeSwitcher'
export default function Header() {
  const { activeMobileMenu, colorHeader, setColorHeader } =
    useContext(GlobalContext)

  useEffect(() => {
    const fixedScroll = () => {
      const body = document.querySelector('body')
      if (activeMobileMenu === true) {
        body?.classList.add('fixed-scroll')
      } else {
        body?.classList.remove('fixed-scroll')
      }
    }
    fixedScroll
  })

  useEffect(() => {
    const ChangeBackground = () => {
      if (window.scrollY > 0) {
        setColorHeader(true)
      } else {
        setColorHeader(false)
      }
    }
    window.addEventListener('scroll', ChangeBackground)
  })

  return (
    <header
      className={`
      container flex justify-between items-center fixed top-0 mx-auto left-0 right-0 w-full p-4 z-30
      sm:px-8
      lg:px-32
      xl:px-48
      ${colorHeader ? 'bg-zinc-950' : 'bg-transparent'}
    `}
    >
      <Link
        href={'/'}
        className={`z-10 uppercase flex items-center
        ${colorHeader ? 'text-white' : 'text-gray-50'}`}
      >
        <Image
          src={'/images-outils/logo-killer-tattoo.svg'}
          width={52}
          height={52}
          alt='logo do estúdio de tatuagem killer tattoo'
        />{' '}
        <span className='text-yellow-500 font-grenze tracking-widest'>
          killer tattoo
        </span>
      </Link>
      <HeaderNavList />
      <HeaderHamburguerMobileButton />
    </header>
  )
}
