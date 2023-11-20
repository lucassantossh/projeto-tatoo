'use client'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '@/app/providers/GlobalContext'
import HeaderNavList from './HeaderNavList'
import HeaderHamburguerMobileButton from './HeaderHamburguerMobileButton'
import Link from 'next/link'
// import ThemeSwitcher from './ThemeSwitcher'
export default function Header() {
  const { activeMobileMenu, colorHeader, setColorHeader } =
    useContext(GlobalContext)

  const ChangeBackground = () => {
    if (window.scrollY > 0) {
      setColorHeader(true)
    } else {
      setColorHeader(false)
    }
  }

  useEffect(() => {
    fixedScroll()
  }, [activeMobileMenu])

  const fixedScroll = () => {
    const body = document.querySelector('body')
    if (activeMobileMenu === true) {
      body?.classList.add('fixed-scroll')
    } else {
      body?.classList.remove('fixed-scroll')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', ChangeBackground)
  }, [colorHeader, setColorHeader])

  return (
    <header
      className={`
      container flex justify-between items-center fixed top-0 mx-auto left-0 right-0 w-full p-4 z-30
      sm:px-8
      lg:px-32
      xl:px-48
      ${colorHeader ? 'bg-[#202529]' : 'bg-transparent'}
    `}
    >
      <Link
        href={'/'}
        className={`z-10 uppercase ${
          colorHeader ? 'text-white' : 'text-gray-50'
        }`}
      >
        killer tatoo
      </Link>
      <HeaderNavList />
      <HeaderHamburguerMobileButton />
    </header>
  )
}